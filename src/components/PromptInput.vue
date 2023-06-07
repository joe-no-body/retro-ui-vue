<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
const inputField = ref(null);

const props = defineProps(['modelValue', 'message']);
const emit = defineEmits(['update:modelValue', 'submit']);

function focusInputBox() {
  // Only focus the input if the user hasn't selected text on screen.
  let selection = window.getSelection();
  // console.debug("Current selection:", selection);
  if (selection && selection.anchorNode && !selection.isCollapsed) return;

  inputField.value?.focus();
}

onMounted(() => {
  // Focus input on page load.
  focusInputBox();
  // Focus input when the user clicks anywhere.
  window.addEventListener('click', focusInputBox);
});

onUnmounted(() => {
  window.removeEventListener('click', focusInputBox);
});

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <!--
    TODO decouple this from <footer> so it's more reusable.
  -->
  <footer>
    <div class="full-width-input-container">
      <div class="label">
        <mark>Enter your selection(s) and press &lt;Enter&gt;:</mark>
      </div>
      <div class="input">
        <input type="text" ref="inputField" v-model="inputValue"
          @keyup.enter="emit('submit', modelValue)">
      </div>
    </div>
    <div v-if="message">{{ message }}</div>
  </footer>
</template>