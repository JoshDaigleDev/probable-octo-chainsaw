import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useAPIGatewayStore = defineStore("apiGateway", () => {

  const routes = ref([
    {name: "Users", path:"random-users"},
    {name: "Words", path:"random-words"}
  ]);

  const currentData = ref([]);
  const recentResponse = ref();
  const recentResponseStatus = ref();
  const currentRoute = ref(routes.value[0]);
  const isLoading = ref(false);

  async function postData(payload) {
    try {
      isLoading.value = true;
      const response = await axios.post(`http://localhost:3030/${currentRoute.value.path}`, payload);
      recentResponseStatus.value = {status: response.status, num: Math.random()};
      recentResponse.value = response.data;
      isLoading.value = false
    }
    catch (error) {
      isLoading.value = false
      alert(error);
      console.log(error);
    }
  }

  async function getData(route) {
    try {
      isLoading.value = true;
      const response = await axios.get(`http://localhost:3030/${route.path}`);
      currentData.value = response.data;
      recentResponseStatus.value = {status: response.status, num: Math.random()};
      console.log("STATUS: " + JSON.stringify(recentResponseStatus.value))
      currentRoute.value = route
      isLoading.value = false
    }
    catch (error) {
      isLoading.value = false
      alert(error);
      console.log(error);
    }
  }

  return { currentData, currentRoute, recentResponseStatus, routes, isLoading, getData, postData }
});