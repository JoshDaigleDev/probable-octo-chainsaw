import { ref } from 'vue'
import { defineStore } from 'pinia';
import { makeGETRequest, makePOSTRequest } from '../services/apiService.js';

export const useAPIGatewayStore = defineStore('apiGateway', () => {

  const routes = ref([
    {name: 'Users', path:'random-users'},
    {name: 'Words', path:'random-words'}
  ]);

  const currentData = ref([]);
  const recentResponseStatus = ref();
  const currentRoute = ref(routes.value[0]);
  const isLoading = ref(false);

  const postData = async (payload) => {
    try {
      isLoading.value = true;
      const response = await makePOSTRequest(currentRoute.value.path, payload);
      recentResponseStatus.value = {status: response.status, num: Math.random()};
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
    catch (error) {
      recentResponseStatus.value = {status: error.response.status, num: Math.random()};
      isLoading.value = false;
    }
  }

  const setRoute = (route) => {
    currentRoute.value = route;
  }
  
  const getData = async () =>{
    try {
      isLoading.value = true;
      const response = await makeGETRequest(currentRoute.value.path);
      currentData.value = response.data;
      recentResponseStatus.value = {status: response.status, num: Math.random()};
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
    catch (error) {
      recentResponseStatus.value = {status: error.response.status, num: Math.random()};
      isLoading.value = false;
    }
  }

  return { currentData, currentRoute, recentResponseStatus, routes, isLoading, getData, postData, setRoute }
});