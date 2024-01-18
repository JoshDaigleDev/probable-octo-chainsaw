import { ref } from 'vue'
import { defineStore } from 'pinia';
import { makeGETRequest, makePOSTRequest } from '../services/apiService.js';

export const useAPIGatewayStore = defineStore('apiGateway', () => {

  const routes = ref([
    { name: 'Users', path: 'random-users' },
    { name: 'Words', path: 'random-words' },
    { name: '*Broken Endpoint*', path: 'some-urls' }
  ]);

  const ROUTE_STORAGE_KEY = 'API#ROUTE';
  const currentData = ref([]);
  const recentResponseStatus = ref();
  const currentRoute = ref(routes.value[0]);
  const isLoading = ref(false);

  const postData = async (payload) => {
    try {
      isLoading.value = true;
      const response = await makePOSTRequest(currentRoute.value.path, payload);
      recentResponseStatus.value = { status: response.status, method: 'POST', route: currentRoute.value.path, num: Math.random() }; //Math.random ensures that reactivity is triggered even though responses are the same
      setTimeout(() => { //This timeout is just to simulate a slight loading delay so you get to see the spinner
        isLoading.value = false;
      }, 500);
    }
    catch (error) {
      recentResponseStatus.value = { status: error.response.status, method: 'POST', route: currentRoute.value.path, num: Math.random() };
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
  }

  const setRoute = (route) => {
    if (route != null) {
      currentRoute.value = route;
      localStorage.setItem(ROUTE_STORAGE_KEY, JSON.stringify(route));
    }
  }

  const getData = async () => {
    try {
      isLoading.value = true;
      const response = await makeGETRequest(currentRoute.value.path);
      currentData.value = response.data;
      recentResponseStatus.value = { status: response.status, method: 'GET', route: currentRoute.value.path, num: Math.random() };
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
    catch (error) {
      recentResponseStatus.value = { status: error.response.status, method: 'GET', route: currentRoute.value.path, num: Math.random() };
      currentData.value = [];
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
  }

  return { currentData, currentRoute, recentResponseStatus, routes, isLoading, getData, postData, setRoute }
});