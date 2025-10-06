<template>
  <div v-if="$props.quantity > 0">
    <span>{{ name }}</span>

    <button @click="$emit('decrement')">-</button>
    <span>{{ quantity }}</span>
    <button @click="$emit('increment')">+</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  quantity: number;
}>();

defineEmits<{
  (event: 'increment'): void;
  (event: 'decrement'): void;
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
