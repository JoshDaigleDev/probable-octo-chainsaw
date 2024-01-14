<script setup>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from 'primevue/api';
import { computed, watch, reactive, onMounted } from 'vue';

const props = defineProps({
    data: { 
        type: Array, 
        required: true 
    },
    title:{
        type: String,
        required: true
    }
});

//This function maps the keys of an object into an object of this structure: key => {"header": Key, "field": key}
const columns = computed(() => {
    if (props.data.length === 0) return [];
    return Object.keys(props.data[0]).map(key => ({"header": key.charAt(0).toUpperCase() + key.slice(1), "field": key}));
}); 

const filters = reactive({global: {value: null, matchMode: FilterMatchMode.CONTAINS}});

const STORAGE_KEY = "TABLE_FILTER";

//watch filters reactive object, when it detects a change from the v-model action => update the store 
watch(filters, (newFilter) => {
    localStorage.setItem(STORAGE_KEY, newFilter.global.value);
});

//load filter from local storage on page load, if it exists
onMounted(() => {
    const storedFilter = localStorage.getItem(STORAGE_KEY);
    filters.global.value = storedFilter;
});
</script>

<template>
 <div class="table-wrapper">
    <DataTable :value="props.data" v-model:filters="filters" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"> 
        <template #header>
            <div class="header-wrapper">
                <span class="table-title"> {{ props.title}} </span>
                <InputText v-model="filters['global'].value" class="" placeholder="Keyword Search" />
            </div>
        </template>
        <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" class="col"></Column>
    </DataTable>
 </div>
</template>

<style scoped>
.header-wrapper {
    display: flex; 
    justify-content: space-between;
}
.table-title {
    font-size: xx-large;
    min-width: max-content;
}
.table-wrapper {
    border: 1px solid var(--surface-500); 
}
.col {
    width: 100px;
}
</style>