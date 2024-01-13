<script setup>
const emit = defineEmits(['itemAdded']);

const newItem = () => {
    const payload = {"Test":"helloWORLD"};
    emit('itemAdded', payload);
}
</script>

<template>
    <div class="button-wrapper">
        <button class="add-button" @click="newItem">Add+</button>
    </div>
</template>

<style scoped>
.add-button {
  font-size: x-large;
  padding: 4rem;
  background-color: var(--primary-color);
  text-decoration: none;
  color: white;
  border-radius: 50%;;
  border: 3px solid white;
}
.add-button:hover {
  background-color: --primary-color;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
</style>