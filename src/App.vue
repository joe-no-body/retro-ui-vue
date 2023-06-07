<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PromptInput from './components/PromptInput.vue';
import * as time from './utils/time.js';

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

    dateRef.value = time.renderDate(date);
    timeRef.value = time.renderTime(date);
  }

  onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 2000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });
}

initTimeUpdater(displayDate, displayTime);

function handleUserSelectionValue(value) {
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

    <PromptInput
      v-model="userSelection" @submit="handleUserSelectionValue"
      :message="message"/>
  </div>
</template>