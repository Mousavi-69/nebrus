<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h3 class="fixed z-10 left-0 right-0 top-0">Header</h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
