<script setup>
import { useClock } from '@/utils/time.js';

const props = defineProps({
  title: String
});

const {date, time} = useClock();
</script>

<template>
  <header>
    <ul>
      <li>{{ date }}</li>
      <li class="flex-push">{{ title }}</li>
      <li class="flex-push">{{ time }}</li>
    </ul>
  </header>
</template>