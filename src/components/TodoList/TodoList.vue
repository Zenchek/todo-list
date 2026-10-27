<template>
    <TodoItem 
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @toggle="$emit('toggle', note.id)"
        @remove="$emit('remove', note.id)"/>
</template>
<script setup>
import TodoItem from '../TodoItem/TodoItem.vue';

defineProps({
    notes: {
        type: Array,
        require: true,
    },
})

defineEmits(['toggle', 'remove'])
</script>
<style scoped>
.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>