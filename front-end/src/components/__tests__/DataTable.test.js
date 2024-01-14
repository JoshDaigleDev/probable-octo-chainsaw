import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import DataTable from '../DataTable.vue'

describe("DataTable", () => {
    const testData = [{ "id": 1, "name": "John" }, { "id": 2, "name": "Marry" }] 
    const testTitle = "Test Table"

    it("Correctly Updates Local Storage", async () => {
        const wrapper = shallowMount(DataTable, {
            props: {
                data: testData,
                title: testTitle,
            }
        });

        const STORAGE_KEY = "TABLE_FILTER";
        const value = "value";

        wrapper.vm.filters.global.value = value;
        await wrapper.vm.$nextTick();

        const storedValue = localStorage.getItem(STORAGE_KEY);
        expect(storedValue).toBe(value);
        localStorage.clear();
    });
});
