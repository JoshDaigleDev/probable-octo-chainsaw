//This could also be done in a composable. Still considering which is better
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const FILTER_LOCAL_STORAGE_KEY = "filter";

export const useFilterStore = defineStore("filter", () => {
    const filter = ref("");

    const getFilter = computed(() => {
        const localStorageFilter = localStorage.getItem(FILTER_LOCAL_STORAGE_KEY);
        return localStorageFilter ? localStorageFilter : filter.value;
    });

    function updateFilter(newFilter) {
        filter.value = newFilter;
        localStorage.setItem(FILTER_LOCAL_STORAGE_KEY, filter.value);
    }

    return { filter, getFilter, updateFilter }
});

