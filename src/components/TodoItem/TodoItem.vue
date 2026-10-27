<template>
    <li class="todo-item" :class="{ done: note.done}">
        <label class="todo-label">
            <input 
            type="checkbox"
            :checked="note.done"
            @change="$emit('toggle')"
            />
            <span class="todo-title">{{ note.title }}</span>
        </label>
        <button class="remove-btn" @click="$emit('remove')" title="Удалить">🗑</button>
    </li>
</template>
<script setup>
defineProps({
    note: {
        type: Object,
        require: true,
    }
})
defineEmits(['toggle', 'remove'])
</script>
<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid #eee;
}
.todo-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  cursor: pointer;
}
.todo-title {
  font-size: 1rem;
}
.todo-item.done .todo-title {
  text-decoration: line-through;
  color: #999;
}
.remove-btn {
  border: none;
  background: transparent;
  color: #c00;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem 0.4rem;
}
.remove-btn:hover {
  background: #ffe5e5;
  border-radius: 4px;
}
</style>