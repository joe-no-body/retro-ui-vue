<script setup>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';

import { RouterView } from 'vue-router'

const displayTitle = ref('DIGITAL PUBLIC LIBRARY');
</script>

<template>
  <div class="wrapper">
    <AppHeader :title="displayTitle"/>

    <RouterView/>
  </div>
</template>