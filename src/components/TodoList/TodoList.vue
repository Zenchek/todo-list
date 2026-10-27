<template>
    <TodoItem 
        v-for="value in source"/>
</template>
<script setup>
import TodoItem from '../TodoItem/TodoItem.vue';
</script>
<style scoped></style>