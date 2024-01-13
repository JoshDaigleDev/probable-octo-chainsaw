<script setup>
import Dropdown from 'primevue/dropdown';
import { watch, ref } from 'vue';

const emit = defineEmits(['routeChanged']);
const props = defineProps({
    routes: { 
        type: Array, 
        required: true 
    },
    startRoute: {
        type: Object,
        required: true
    }
});

const selectedRoute = ref(props.startRoute);
console.log(props)
watch(selectedRoute, (newRoute) => {
    emit('routeChanged', newRoute);
})

</script>

<template>
    <div class="dropdown-wrapper">
        <span class="label">Endpoints</span>
        <Dropdown v-model="selectedRoute" :options="props.routes" optionLabel="name" placeholder="Select an Endpoint" />
    </div>
</template>

<style scoped>
.dropdown-wrapper {
    display:flex;
    flex-direction: column;
}

.label {
    margin: 0.12rem;
}
</style>