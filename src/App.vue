<template>
    <main class="main">
        <TodoMain 
        @add="hendleAdd"/>
        <Filters />
        <TodoList 
        :notes="notes"
        @toggle="toggleNote"
        @remove="removeNote"/>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import TodoMain from './components/TodoMain/TodoMain.vue';
    import Filters from './components/Filters/Filters.vue';
    import TodoList from './components/TodoList/TodoList.vue';
    import { useNotes } from './composables/useNotes.js';

    const {notes, addNote, toggleNote, removeNote} = useNotes()
    const newTitle = ref('')
    
    function hendleAdd(title){
        addNote(title)
    }
</script>
<style scoped>
    .main{
        max-width: 700px;
        margin: auto;
    }
</style>
