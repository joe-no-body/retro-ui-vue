<script setup>
import { ref } from 'vue';
import PromptInput from './components/PromptInput.vue';
import AppHeader from './components/AppHeader.vue';

import { RouterView } from 'vue-router'

const userSelection = ref('');
const message = ref(null);

const displayTitle = ref('DIGITAL PUBLIC LIBRARY');

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