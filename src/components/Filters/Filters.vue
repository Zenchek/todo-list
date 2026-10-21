<template>
    <div class="todo-filters">
        <fieldset class="filters">
            <legend class="sr-only">Фильтер задач</legend>
            <label for="" class="filters__item">
                <input type="radio" name="filter" value="all" v-model="filter">
                <span>Все</span>
            </label>
            <label for="" class="filters__item">
                <input type="radio" name="filter" value="active" v-model="filter">
                <span>Активные</span>
            </label>
            <label for="" class="filters__item">
                <input type="radio" name="filter" value="done" v-model="filter">
                <span>Выполненные</span>
            </label>
        </fieldset>
    </div>
</template>
<script setup></script>
<style scoped>
.filters{
    display: flex;
    justify-content: space-around;
}

.filters__item {
    border-color: black;
    border: 2px;
    background-color: rgb(0, 187, 255);
    border-radius: 15px;
    padding: 5px;
    min-width: 120px;
    max-width: 220px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.filters__item:hover{
    background-color: rgb(86, 210, 255);
}
</style>