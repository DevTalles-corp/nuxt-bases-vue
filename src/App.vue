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

    <!-- <suspense> -->
    <PokemonInfo />
    <!-- </suspense> -->
  </div>
</template>

<script setup lang="ts">
import PokemonInfo from './components/PokemonInfo.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import { useProducts } from './composable/useProducts';

const { products, handleDecrementQuantity, handleIncrementQuantity } =
  useProducts();
</script>
