<script setup lang="ts">
import { useItemsStore } from "../stores/items"; // Убедитесь, что путь правильный
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import type {ItemType} from "../types.ts";

const storeItems = useItemsStore();
const { items } = storeToRefs(storeItems);

const currentPage = ref<number>(1);
const itemsPerPage: number = 6;

const paginatedItems = computed((): ItemType[] => {
  const start: number = (currentPage.value - 1) * itemsPerPage;
  const end: number = start + itemsPerPage;
  return items.value.slice(start, end);
});

const totalPages = computed((): number => {
  return Math.ceil(items.value.length / itemsPerPage);
});

const nextPage = (): void => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = (): void => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<template>
  <div v-if="items.length">
    <ul class="cards-list">
      <li class="cards-item" v-for="item in paginatedItems" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>ID № {{ item.id }}</p>
        <p class="time">
          <span>Создан</span>
          <span>{{ new Date(item.created_at * 1000).toLocaleString() }}</span>
        </p>
      </li>
    </ul>

    <!-- Пагинация -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1"> &#8592</button>
      <span>Страница {{ currentPage }} из {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">&#8594</button>
    </div>
  </div>
  <div v-else>
    <h1>Запросите данные</h1>
  </div>
</template>

<style scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cards-item {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px;
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #000;
}

.time {
  display: flex;
  flex-direction: column;
}

.pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.pagination button {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  color: #000000;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>