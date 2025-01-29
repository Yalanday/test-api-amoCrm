<script setup lang="ts">
import {ref} from 'vue';
import {Select} from 'ant-design-vue';
import LoaderCircle from "./LoaderCircle.vue";
import ButtonElement from "./ButtonElement.vue";
import {makeRequest} from "../api/api.ts";
import {useItemsStore} from "../stores/items.ts";
import type {OptionType} from "../types.ts";

const ASelect = Select;
const ASelectOption = Select.Option;
const storeItems = useItemsStore();

const options = ref<OptionType[]>([
  {value: 'leads', label: 'Сделка'},
  {value: 'contacts', label: 'Контакт'},
  {value: 'companies', label: 'Компания'},
]);

const selectedValue = ref<string | undefined>(undefined);

const isLoading = ref<boolean>(false);

const handleClick = async (): Promise<void> => {
  isLoading.value = true;

  if (selectedValue.value) {
    try {
      const data = await makeRequest(selectedValue.value);
      storeItems.setItems(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Ошибка:', error);
        alert(`Ошибка: ${error.message}`);
      } else {
        console.error('Неизвестная ошибка:', error);
        alert(`Произошла неизвестная ошибка: ${error}`);
      }
    } finally {
      isLoading.value = false;
    }
  }
};
</script>

<template>
  <div class="my-component">
    <a-select
        v-model:value="selectedValue"
        placeholder="Не выбрано"
        style="width: 200px; margin-right: 10px"
    >
      <a-select-option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{ option.label }}
      </a-select-option>
    </a-select>
    <div v-if="isLoading">
      <LoaderCircle/>
    </div>
    <button-element
        v-else
        @click="handleClick"
        :selected-value="selectedValue"
        text="Создать"/>
  </div>
</template>

<style scoped>
.my-component {
  display: flex;
  align-items: center;
  margin: 20px;
}

</style>