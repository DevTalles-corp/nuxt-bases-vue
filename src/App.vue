<template>
  <div>
    <h2>Mi carrito de compras</h2>

    <ShoppingCart
      v-for="product in products"
      :name="product.name"
      :quantity="product.quantity"
      @increment="() => handleIncrementQuantity(product.id)"
      @decrement="() => handleDecrementQuantity(product.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ShoppingCart from './components/ShoppingCart.vue';

const products = ref([
  {
    id: 1,
    name: 'Camiseta',
    quantity: 10,
  },
  {
    id: 2,
    name: 'Pantalón',
    quantity: 5,
  },
  {
    id: 3,
    name: 'Zapatos',
    quantity: 3,
  },
]);

function handleIncrementQuantity(productId: number) {
  const product = products.value.find((product) => product.id === productId);
  if (!product) return;
  product.quantity++;
}

function handleDecrementQuantity(productId: number) {
  const product = products.value.find((product) => product.id === productId);
  if (!product) return;
  if (product.quantity === 0) return;
  product.quantity--;
}
</script>
