<script setup lang="ts">

type ButtonPropsType = {
  selectedValue: string | undefined,
  text: string
}

defineProps<ButtonPropsType>()

</script>

<template>
  <button
      :class="['custom-button', { disabled: !selectedValue }]"
      :disabled="!selectedValue"
      v-html="text"
  ></button>

</template>

<style scoped>

.custom-button {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: 30px;
  font-size: 14px;
  line-height: 1;
}

.custom-button:hover {
  background-color: #2980b9;
}

.custom-button.disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.custom-button.disabled:hover {
  background-color: #bdc3c7;
}
</style>