<script setup>
import InputText from 'primevue/inputtext';
import { ref, watch, onMounted } from 'vue';

const emit = defineEmits(['submitForm'])

const submit = () => {
    const payload = {words: words.value, author: author.value}
    emit('submitForm', payload);
    words.value = null;
    author.value = null;
}

const words = ref();
const author = ref();

const WORDS_STORAGE_KEY = 'USER_FORM#WORDS';
const AUTHOR_STORAGE_KEY = 'USER_FORM#AUTHOR';

watch(words, (newWords) => {
    localStorage.setItem(WORDS_STORAGE_KEY, newWords);
});

watch(author, (newAuthor) => {
    localStorage.setItem(AUTHOR_STORAGE_KEY, newAuthor);
});

onMounted(() => {
    const storedWords = localStorage.getItem(WORDS_STORAGE_KEY);
    const storedAuthor = localStorage.getItem(AUTHOR_STORAGE_KEY);

    if(storedWords != null && storedWords != "null") words.value = storedWords;
    if(storedAuthor != null && storedAuthor != "null") author.value = storedAuthor;
});
</script>

<template>
    <div class='form'>
        <h1 class='title'>New Words</h1>
        <div class='input-element'>
            <label class='input-label' for='Words'>Words</label>
            <InputText data-testid='words-input' v-model='words' id='Words' placeholder='Enter some words'/>
        </div>
        <div class='input-element'>
            <label class='input-label' for='Author'>Author</label>
            <InputText data-testid='author-input' v-model='author' id='Author' placeholder='Enter an author'/>
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