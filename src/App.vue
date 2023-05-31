<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
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
      <div>Footer</div>
    </footer>
  </div>
</template>

<style scoped>
</style>
