import { onMounted, ref } from 'vue';

export const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null);
  const hasError = ref(false);
  const error = ref<Error | null>(null);
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
      error.value = err as Error;
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
