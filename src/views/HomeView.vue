<script setup>
import { ref } from 'vue';
import PromptInput from '@/components/PromptInput.vue';

function handleUserSelectionValue(value) {
  message.value = `Invalid selection: ${userSelection.value}`;
  userSelection.value = '';
}

const userSelection = ref('');
const message = ref(null);
</script>

<template>
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

  <PromptInput
    v-model="userSelection" @submit="handleUserSelectionValue"
    :message="message"/>
</template>