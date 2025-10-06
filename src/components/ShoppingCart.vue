<template>
  <div>
    <span>{{ name }}</span>
    <span>{{ quantity }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  quantity: number;
}>();
</script>

<style scoped>
div {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
}

span {
  width: 70px;
}
</style>
