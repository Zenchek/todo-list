<template>
    <div class="todo-main">
        <h1>МОИ ЗАДАЧИ</h1>
        <form class="todo-main__form" @submit.prevent="$emit('hendleAdd')">
            <div class="todo-main__input-container">
                <input 
                v-model="newTitle"
                type="text" 
                class="todo-input" 
                placeholder="Впишите свою задачу">
                <button class="todo-button">Добавить</button>
            </div>
            <div class="todo-main__messagebox-error">
                <p>c.lf yf[eq]</p>
            </div>
        </form>
    </div>
</template>
<script setup>
defineEmits(['hendleAdd'])
</script>
<style scoped>
    .todo-main{
        display: flex;
        justify-content: space-between;
        flex-direction: column;   
    }

    .todo-main__form{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .todo-main__input-container{
        display: flex;
        justify-content: space-around;
    }
    .todo-main__messagebox-error{
        background-color: rgb(255, 69, 0, 0.2);
        width: 560px;
        padding: 3px;
        margin-left: 12px;
        border-radius: 10px;
    }

    .todo-input{
        width: 80%;
        border-radius: 10px;
        padding: 5px;
    }

    .todo-button{
        background-color: rgb(0, 187, 255);
        padding: 5px 15px;
        border-radius: 15px;
        border-color: rgb(0, 78, 106);
        border-top: 5px;
        color: white;
    }
</style>