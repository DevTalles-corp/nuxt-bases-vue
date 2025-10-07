<template>
  <section v-if="pokemon">
    <h2>#{{ pokemon.id }} {{ pokemon.name }}</h2>
    <img :src="pokemon.image" :alt="pokemon.name" />

    <button @click="pokemonId++">Siguiente</button>
    <h3>PokemonId: {{ pokemonId }}</h3>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFetch } from '../composable/useFetch';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const pokemon = ref<Pokemon | null>(null);
const pokemonId = ref(1);

// const response = await fetch(
//   `https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`
// );
// const responseData = await response.json();
const { data, hasError, isLoading } = useFetch(
  `https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`
);

watch(data, (newPokemon: any) => {
  pokemon.value = {
    id: newPokemon.id,
    name: newPokemon.name,
    image: newPokemon.sprites.front_default,
  };
});
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

img {
  width: 100px;
  height: 100px;
}

button {
  padding: 10px 20px;
}
</style>
