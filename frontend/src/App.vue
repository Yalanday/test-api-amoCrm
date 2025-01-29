<script setup lang="ts">

import FormControls from "./components/FormControls.vue";
import ContentPlace from "./components/ContentPlace.vue";
</script>

<template>
  <main class="main">
    <form-controls/>
    <content-place/>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  width: 700px;
  height: 600px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
