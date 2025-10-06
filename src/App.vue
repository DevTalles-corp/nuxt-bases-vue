<template>
  <div>
    <h2>Mi carrito de compras</h2>

    <ShoppingCart :name="product.name" :quantity="product.quantity" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ShoppingCart from './components/ShoppingCart.vue';

const product = ref({
  name: 'Camiseta',
  quantity: 10,
});
</script>
