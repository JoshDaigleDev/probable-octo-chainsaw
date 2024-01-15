<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
const emit = defineEmits(['submitForm'])


const submit = () => {
    const payload = {name: name.value, age: age.value, email: email.value}
    emit('submitForm', payload);
}

const name = ref();
const age = ref();
const email = ref()

</script>

<template>
    <div class='form'>
        <h1 class='title'>New User</h1>
        <div class='input-element'>
            <label class='input-label' for='Name'>Name</label>
            <InputText data-testid='name-input' v-model='name' id='Name' placeholder='Enter a name'/>
        </div>
        <div class='input-element'>
            <label class='input-label' for='Age'>Age</label>
            <InputNumber data-testid='age-input' v-model='age' id='Age' inputId='integeronly' placeholder='Enter an age'/>
        </div>
        <div class='input-element'>
            <label class='input-label' for='Email'>Email</label>
            <InputText data-testid='email-input' v-model='email' id='Email' placeholder='Enter an email'/>
        </div>
        <button class='submit-button' @click='submit'>Submit</button>
    </div>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem;
    background-color: var(--surface-400);
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.input-element {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.input-label {
    font-weight: bold;
    margin-bottom: 0.2rem;
}

.submit-button {
  font-size: x-large;
  padding: 1rem;
  background-color: var(--primary-color);
  text-decoration: none;
  color: white;
  border-radius: 0.2rem;
  border: 0px;
}

.submit-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.title {
    margin:0px;
}
</style>