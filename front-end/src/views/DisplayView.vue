<script setup>
import DataTable from '../components/DataTable.vue'
import ProgressSpinner from 'primevue/progressspinner';
import { useAPIGatewayStore } from '../stores/apiGateway';
import { computed } from 'vue';

const apiGateway = useAPIGatewayStore();

const currentData = computed(() => {
  return apiGateway.currentData;
});

const currentRoute = computed(() => {
  return apiGateway.currentRoute;
});

const loading = computed(() => {
  return apiGateway.isLoading;
});

const title = computed(() => {
  return `VIEW ${currentRoute.value.name.toUpperCase()}`;
});
</script>

<template>
  <div class='display-wrapper'>
    <div class='title-wrapper'>
      <h1 class='title'>{{ title }}</h1>
    </div>
    <div v-if='loading' class='spinner-wrapper'>
        <ProgressSpinner></ProgressSpinner>
      </div>
    <div class='table-wrapper'>
      <DataTable :data='currentData' :title='currentRoute.name'/>
    </div>
  </div>
</template>

<style scoped>
.display-wrapper {
  display:grid;
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  min-height: 100%;
}
.table-wrapper {
  grid-area: 2 / 2 / 6 / 6;
}
.spinner-wrapper {
  grid-area: 1 / 5 / 1 / 5; 
  display:flex;
  margin-right: auto;
  align-items: center;
}
.title-wrapper {
  grid-area: 1 / 3 / 1 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
}
.title {
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
}
</style>
