<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PromptInput from './components/PromptInput.vue';

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