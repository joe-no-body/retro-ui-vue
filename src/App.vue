<script setup>
import { ref, onMounted } from 'vue';

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const selectionInput = ref(null);
const selection = ref('');
const message = ref(null);

onMounted(() => {
  selectionInput.value.focus();

  // TODO: only focus the input if the user hasn't selected text on screen.
  // Right now this makes it a pain to select and copy text.
  window.addEventListener('click', () => selectionInput.value.focus());
})

function handleSelection() {
  let selectionVal = selection.value;
  message.value = `Invalid selection: ${selection.value}`;
  selection.value = '';
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
        <li>2023-05-31</li>
        <li class="flex-push">DIGITAL PUBLIC LIBRARY</li>
        <li class="flex-push">09:28am</li>
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
      <div>
        <mark>Enter your selection(s) and press &lt;Enter&gt;:</mark>
        <span class="full-width-input"><input type="text" ref="selectionInput" v-model="selection" @keyup.enter="handleSelection"></span>
      </div>
      <div v-if="message">{{ message }}</div>
    </footer>
  </div>
</template>

<style>
footer div * {
  vertical-align: bottom;
}
.full-width-input {
  display: inline-block;
  overflow: hidden;
  padding-right: 1em;
}

.full-width-input input[type="text"] {
  width: 100%;
}
</style>