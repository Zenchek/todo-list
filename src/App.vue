<template>
    <main class="main">
        <TodoMain />
        <Filters />
        <TodoList />
        <Counter />
    </main>
</template>

<script setup>
    import TodoMain from './components/TodoMain/TodoMain.vue';
    import Filters from './components/Filters/Filters.vue';
    import TodoList from './components/TodoList/TodoList.vue';
    import Counter from './components/Counter/Counter.vue';
</script>
<style scoped>
    .main{
        max-width: 700px;
        margin: auto;
    }
</style>
