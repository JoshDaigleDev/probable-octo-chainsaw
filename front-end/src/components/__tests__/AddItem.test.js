import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AddItem from '../AddItem.vue'

describe("AddItem", () => {

    it("Renders and emits event", async () => {
        const wrapper = mount(AddItem);

        expect(wrapper.text()).toContain('Add+');

        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('itemAdded')).toBeTruthy();
    });
});
