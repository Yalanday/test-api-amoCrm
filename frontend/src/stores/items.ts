import {defineStore} from 'pinia';
import type {ItemType} from "../types.ts";

export const useItemsStore = defineStore('counter', {
    state: () => ({
        _items: [] as ItemType[],
    }),
    getters: {
        items(state) {
            return state._items;
        }
    },
    actions: {
        setItems(newItems: any) {
            this._items = newItems;
        }
    }
});