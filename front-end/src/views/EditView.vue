<script setup>
import ProgressSpinner from 'primevue/progressspinner';
import AddItem from '../components/AddItem.vue';
import { computed } from  "vue";
import { useAPIGatewayStore } from "../stores/apiGateway";

const apiGateway = useAPIGatewayStore();

const currentRoute = computed(() => {
  return apiGateway.currentRoute;
});

const title = computed(() => {
  return `ADD ${currentRoute.value.name.toUpperCase()}`;
});

const loading = computed(() => {
  return apiGateway.isLoading;
});

const addData = (payload) => {
  apiGateway.postData(payload);
}
</script>

<template>
  <div class="edit-wrapper">
    <div class="title-wrapper">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div v-if="loading" class="spinner-wrapper">
      <ProgressSpinner style="width: 200px; height: 200px;" strokeWidth="5" fill="var(--surface-ground)"></ProgressSpinner>
    </div>
    <div class="form-wrapper">
      <AddItem @itemAdded="addData"></AddItem>
    </div>
  </div>
</template>

<style scoped>
.edit-wrapper {
  display:grid;
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  min-height: 100%;
}
.spinner-wrapper {
  grid-area: 4 / 2 / 5 / 6; 
  display:flex;
  align-items: center;
  justify-content: center;
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
.form-wrapper {
  grid-area: 2 / 2 / 3 / 6;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
