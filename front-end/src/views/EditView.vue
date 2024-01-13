<script setup>

</script>

<template>
  <div class="edit-wrapper">
    <div class="inner-wrapper">
      <h1>This is an EDIT page</h1>
    </div>
  </div>
</template>

<style>
.edit-wrapper {
  display:grid;
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  min-height: 100%;
}

.inner-wrapper {
  grid-area: 1 / 3 / 3 / 7;
}
</style>
