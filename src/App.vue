<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const userSelectionInput = ref(null);
const userSelection = ref('');
const message = ref(null);

const displayDate = ref('');
const displayTime = ref('');

let animationFrameHandle;

function zeropad(s) {
  return ("" + s).padStart(2, "0");
}

function keepTimeUpdated() {
  let date = new Date();
  let year = date.getFullYear();
  let month = zeropad(date.getMonth());
  let day = zeropad(date.getDate());

  let hour = date.getHours();
  let period = (hour >= 12) ? 'pm' : 'am';
  hour %= 12;
  if (hour == 0) hour = '12';
  let minute = zeropad(date.getMinutes());

  displayDate.value = `${year}-${month}-${day}`;
  displayTime.value = `${hour}:${minute}${period}`;

  animationFrameHandle = requestAnimationFrame(keepTimeUpdated);
}

function focusInputBox() {
  // Only focus the input if the user hasn't selected text on screen.
  let selection = window.getSelection();
  // console.debug("Current selection:", selection);
  if (selection && selection.anchorNode && !selection.isCollapsed) return;

  userSelectionInput.value?.focus();
}

onMounted(() => {
  // Focus input on page load.
  focusInputBox();
  // Focus input when the user clicks anywhere.
  window.addEventListener('click', focusInputBox);

  keepTimeUpdated();
})

onUnmounted(() => {
  window.removeEventListener('click', focusInputBox);
  cancelAnimationFrame(animationFrameHandle);
})

function handleUserSelectionValue() {
  message.value = `Invalid selection: ${userSelection.value}`;
  userSelection.value = '';
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->

  <div class="wrapper">
    <header>
      <ul>
        <li>{{ displayDate }}</li>
        <li class="flex-push">DIGITAL PUBLIC LIBRARY</li>
        <li class="flex-push">{{ displayTime }}</li>
      </ul>
    </header>
    <main>
      <div class="main-menu">
        <p>
          Welcome to the Online Public Access Catalog!<br />
          Please select one of the options below.
        </p>

        <ol>
          <li>TITLE Keywords</li>
          <li>Exact TITLE</li>
          <li>AUTHOR Browse</li>
          <li>SUBJECT Keywords</li>
          <li>SERIES</li>
          <li>SUPER Search</li>
          <li>Newspaper Keyword Search</li>
          <li>Newspaper Subject Search</li>
          <li>Best Sellers and Award Books</li>
          <li>Additional Searches</li>
          <li>Review Patron Record</li>
          <li>Logoff</li>
        </ol>
      </div>
    </main>
    <footer>
      <div class="full-width-input-container">
        <div class="label">
          <mark>Enter your selection(s) and press &lt;Enter&gt;:</mark>
        </div>
        <div class="input"><input type="text" ref="userSelectionInput" v-model="userSelection" @keyup.enter="handleUserSelectionValue"></div>
      </div>
      <div v-if="message">{{ message }}</div>
    </footer>
  </div>
</template>

<style>
.full-width-input-container {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}

.full-width-input-container .label {
  flex: initial;
}

.full-width-input-container .input {
  flex: auto;
}

.full-width-input-container .input input {
  width: 100%;
}

footer div * {
  vertical-align: bottom;
}
</style>