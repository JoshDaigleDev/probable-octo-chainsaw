<script setup>
import ProgressSpinner from 'primevue/progressspinner';
import UsersForm from '../components/UsersForm.vue';
import WordsForm from '../components/WordsForm.vue';
import { computed } from  'vue';
import { useAPIGatewayStore } from '../stores/apiGateway';

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
  <div class='edit-wrapper'>
    <div class='title-wrapper'>
      <h1 class='title'>{{ title }}</h1>
    </div>
    <div v-if='loading' class='spinner-wrapper'>
      <ProgressSpinner></ProgressSpinner>
    </div>
    <div class='form-wrapper'>
      <UsersForm v-if='title=="ADD USERS"' @submitForm='addData'></UsersForm>
      <WordsForm v-if='title=="ADD WORDS"' @submitForm='addData'></WordsForm>
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
.form-wrapper {
  grid-area: 2 / 2 / 6 / 6; 
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
