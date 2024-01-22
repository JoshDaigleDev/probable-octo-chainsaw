import { ref } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAPIGatewayStore = defineStore('apiGateway', () => {

  const routes = ref([
    { name: 'Users', path: 'random-users' },
    { name: 'Words', path: 'random-words' },
    { name: '*Broken Endpoint*', path: 'some-urls' }
  ]);

  const BASE_URL = 'http://localhost:3030';

  const axiosInstance = axios.create({
    baseURL: BASE_URL
  });

  const ROUTE_STORAGE_KEY = 'API#ROUTE';
  const currentData = ref([]);
  const recentResponseStatus = ref();
  const currentRoute = ref(routes.value[0]);
  const isLoading = ref(false);

  axiosInstance.interceptors.request.use(
    (config) => {
      isLoading.value = true;
      return config;
    },
    (error) => {
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      recentResponseStatus.value = { status: response.status, method: response.config.method.toUpperCase(), route: currentRoute.value.path, num: Math.random() }; //Math.random ensures that reactivity is triggered even though responses are the same
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
      return response;
    },
    (error) => {
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
      recentResponseStatus.value = { status: error.response.status, method: error.config.method.toUpperCase(), route: currentRoute.value.path, num: Math.random() }; 
      return Promise.reject(error);
    }
  );

  const postData = async (payload) => {
    try {
      await axiosInstance.post(`${BASE_URL}/${currentRoute.value.path}`, payload);
    }
    catch (error) {}
  }

  const setRoute = (route) => {
    if (route != null) {
      currentRoute.value = route;
      localStorage.setItem(ROUTE_STORAGE_KEY, JSON.stringify(route));
    }
  }

  const getData = async () => {
    try {
      const response = await axiosInstance.get(`${BASE_URL}/${currentRoute.value.path}`);
      currentData.value = response.data;
    }
    catch (error) {
      currentData.value = [];
    }
  }

  return { currentData, currentRoute, recentResponseStatus, routes, isLoading, getData, postData, setRoute }
});