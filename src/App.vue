<script setup>
import { ref } from 'vue';
import PromptInput from './components/PromptInput.vue';
import AppHeader from './components/AppHeader.vue';
import { useClock } from './utils/time.js';

import { RouterLink, RouterView } from 'vue-router'

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
    <AppHeader :title="displayTitle"/>

    <RouterView/>

    <PromptInput
      v-model="userSelection" @submit="handleUserSelectionValue"
      :message="message"/>
  </div>
</template>