import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useFilterStore } from '@/stores/filter'

const FILTER_LOCAL_STORAGE_KEY = "filter";

describe('Filter Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Sets Local Storage', () => {
        const filterStore = useFilterStore();
        expect(filterStore.filter).toStrictEqual("");
        filterStore.updateFilter("asdf")
        expect(filterStore.filter).toStrictEqual("asdf");
        expect(localStorage.getItem(FILTER_LOCAL_STORAGE_KEY)).toStrictEqual("asdf");
        filterStore.updateFilter("")
        expect(filterStore.filter).toStrictEqual("");
        expect(localStorage.getItem(FILTER_LOCAL_STORAGE_KEY)).toStrictEqual("");
    })
});