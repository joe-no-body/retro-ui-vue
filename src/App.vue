<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const userSelectionInput = ref(null);
const userSelection = ref('');
const message = ref(null);

const displayTitle = ref('DIGITAL PUBLIC LIBRARY');
const displayDate = ref('');
const displayTime = ref('');

function initTimeUpdater(dateRef, timeRef) {
  let intervalId;


  function updateTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = zeropad(date.getMonth());
    let day = zeropad(date.getDate());

    // TODO: test and validate this logic
    let hour = date.getHours();
    let period = 'am';
    if (hour >= 12) {
      period = 'pm';
      hour -= 12;
    }
    if (hour == 0) hour = '12';
    hour = zeropad(hour);
    let minute = zeropad(date.getMinutes());

    dateRef.value = `${year}-${month}-${day}`;
    timeRef.value = `${hour}:${minute}${period}`;
  }

  onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });
}

function zeropad(s) {
  return ("" + s).padStart(2, "0");
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
});

onUnmounted(() => {
  window.removeEventListener('click', focusInputBox);
});

initTimeUpdater(displayDate, displayTime);

function handleUserSelectionValue() {
  message.value = `Invalid selection: ${userSelection.value}`;
  userSelection.value = '';
}
</script>

<template>
  <div class="wrapper">
    <header>
      <ul>
        <li>{{ displayDate }}</li>
        <li class="flex-push">{{ displayTitle }}</li>
        <li class="flex-push">{{ displayTime }}</li>
      </ul>
    </header>
    <RouterView/>
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