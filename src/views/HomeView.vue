<script setup>
import { ref } from 'vue';

const msg = ref('Hello World!');
</script>

<template>
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
    <div>Footer</div>
  </footer>
</template>