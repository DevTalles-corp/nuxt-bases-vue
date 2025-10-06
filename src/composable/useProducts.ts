import { ref } from 'vue';

export const useProducts = () => {
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

  return {
    // props
    products,

    // Methods
    handleDecrementQuantity,
    handleIncrementQuantity,
  };
};
