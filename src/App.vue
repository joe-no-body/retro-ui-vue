<script setup>
import { ref } from 'vue';
import PromptInput from './components/PromptInput.vue';
import {useClock} from './utils/time.js';

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const userSelection = ref('');
const message = ref(null);

const displayTitle = ref('DIGITAL PUBLIC LIBRARY');

const {date, time} = useClock();

function handleUserSelectionValue(value) {
  message.value = `Invalid selection: ${userSelection.value}`;
  userSelection.value = '';
}
</script>

<template>
  <div class="wrapper">
    <header>
      <ul>
        <li>{{ date }}</li>
        <li class="flex-push">{{ displayTitle }}</li>
        <li class="flex-push">{{ time }}</li>
      </ul>
    </header>

    <RouterView/>

    <PromptInput
      v-model="userSelection" @submit="handleUserSelectionValue"
      :message="message"/>
  </div>
</template>