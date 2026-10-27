<template>
    <main class="main">
        <TodoMain 
        @headle="hendleAdd"/>
        <Filters />
        <TodoList 
        :notes="notes"
        @toggle="toggleNote"
        @remove="removeNote"/>
        <Counter />
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import TodoMain from './components/TodoMain/TodoMain.vue';
    import Filters from './components/Filters/Filters.vue';
    import TodoList from './components/TodoList/TodoList.vue';
    import Counter from './components/Counter/Counter.vue';
    import { useNote } from './composables/useNotes.js';

    const {notes, addNote, toggleNote, removeNote} = useNote()
    const newTitle = ref('')
    
    function hendleAdd(){
        addNote(newTitle.value)
        newTitle.value = ''
    }
</script>
<style scoped>
    .main{
        max-width: 700px;
        margin: auto;
    }
</style>
