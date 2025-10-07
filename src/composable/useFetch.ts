import { onMounted, ref } from 'vue';

export const useFetch = (url: string) => {
  const data = ref(null);
  const hasError = ref(false);
  const error = ref(null);
  const isLoading = ref(true);

  onMounted(() => {
    fetchData();
  });

  async function fetchData() {
    isLoading.value = true;
    error.value = null;
    hasError.value = false;

    try {
      const response = await fetch(url);
      const responseData = await response.json();

      data.value = responseData;
    } catch (err) {
      error.value = err as any;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    data,
    hasError,
    isLoading,
    error,
  };
};
