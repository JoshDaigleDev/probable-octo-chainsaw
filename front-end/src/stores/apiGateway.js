import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useAPIGatewayStore = defineStore("apiGateway", () => {

  const routes = ref([
    {name: "Users", path:"random-users"},
    {name: "Words", path:"random-words"}
  ]);

  const currentData = ref([]);
  const currentRoute = ref(routes.value[0]);
  const isLoading = ref(false);

  async function fetchData(route) {
    try {
      isLoading.value = true;
      console.log(isLoading.value)
      const response = await axios.get(`http://localhost:3030/${route.path}`);
      currentData.value = response.data;
      currentRoute.value = route
      isLoading.value = false
      console.log(isLoading.value)
    }
    catch (error) {
      //PLACEHOLDER 
      alert(error);
      console.log(error);
    }
  }

  return { currentData, currentRoute, routes, isLoading, fetchData }
});