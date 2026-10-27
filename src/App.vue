<template>
    <main class="main">
        <TodoMain 
        @add="handleAdd"/>
        <Filters />
        <TodoList 
        :notes="notes"
        @toggle="totggelNote"
        @remove="removeNote"/>
    </main>
</template>

<script setup>
    import TodoMain from './components/TodoMain/TodoMain.vue';
    import Filters from './components/Filters/Filters.vue';
    import TodoList from './components/TodoList/TodoList.vue';
    import { useNotes } from './composables/useNotes.js';

    const { notes, addNote, totggelNote, removeNote } = useNotes()
    
    function handleAdd(title) {
        addNote(title)
    }
</script>
<style scoped>
    .main{
        max-width: 700px;
        margin: auto;
    }
</style>
