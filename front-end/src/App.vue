<script setup>
import EndpointDropdown from './components/EndpointDropdown.vue';
import Toast from 'primevue/toast';
import { computed, watch, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useAPIGatewayStore } from './stores/apiGateway';
import { useToast } from 'primevue/usetoast';

const apiGateway = useAPIGatewayStore();
const toast = useToast();

const apiRoutes = computed(() => {
  return apiGateway.routes;
});

const currentAPIRoute = computed(() => {
  return apiGateway.currentRoute;
});

const responseStatus = computed(() => {
  return apiGateway.recentResponseStatus;
});

const updateAPIRoute = (newRoute) => {
  apiGateway.setRoute(newRoute);
  apiGateway.getData();
}

watch(responseStatus, (newStatus) => {
  const catagory = parseInt(newStatus.status.toString().charAt(0), 10);
  if (catagory === 2) {
    toast.add({ severity: 'success', summary: 'Success!', detail: `${newStatus.method} request for endpoint: ${newStatus.route} succeeded`, life: 3000 });
  } else if (catagory == 4 || catagory == 5) {
    toast.add({ severity: 'error', summary: 'Failure!', detail: 'The API call failed.'});
  }
});

onMounted(() => {
  const ROUTE_STORAGE_KEY = 'API#ROUTE'
  const storedRoute = JSON.parse(localStorage.getItem(ROUTE_STORAGE_KEY));
  if(storedRoute != null) apiGateway.setRoute(storedRoute);
});
</script>

<template>
  <div class='app-wrapper'>
    <Toast />
    <div class='header-wrapper'>
      <header class='navigation-wrapper'>
        <h1 class='title'>Joshua Daigle Assessment</h1>
        <nav class='top-navigation'>
          <RouterLink class='router-link' to='/'>View</RouterLink>
          <RouterLink class='router-link' to='/add'>Add</RouterLink>
          <EndpointDropdown @route-changed='updateAPIRoute' :routes='apiRoutes' :current-route='currentAPIRoute'></EndpointDropdown>
        </nav>
      </header>
    </div>
    <div class='view-wrapper'>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-width: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(12, minmax(50px, 1fr));
  grid-template-columns: repeat(12, minmax(50px, 1fr));
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.header-wrapper {
  grid-area: 1 / 1 / 1 / 13;
  background-color: var(--surface-400);
  border-bottom: 1px solid var(--surface-500);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 40;
}
.view-wrapper {
  grid-area: 2 / 2 / 12 / 12;
  background-color: rgba(233, 236, 239, 0.9);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.navigation-wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(12, minmax(50px, 1fr));
}
.top-navigation {
  grid-area: 1 / 5 / 1 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.router-link {
  font-size: x-large;
  padding: 1rem;
  background-color: var(--primary-color);
  text-decoration: none;
  color: white;
  border-radius: 0.2rem;
}
.router-link:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.title {
  grid-area: 1 / 2 / 1 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
