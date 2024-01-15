//TESTING LIMITTED DUE TO PRIMEVUE BUG: https://github.com/primefaces/primevue/issues/3933

import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import EndpointDropdown from '../EndpointDropdown.vue';

describe('Endpoint Dropdown', () => {
    it('Renders and emits event', async () => {
        const routeList = [{name: 'Users', path:'random-users'}, {name: 'Words', path:'random-words'}];

        const wrapper = shallowMount(EndpointDropdown);

        wrapper.vm.selectedRoute = routeList[1];
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('routeChanged')).toBeTruthy();
        const payload = wrapper.emitted('routeChanged')[0][0];
        expect(payload).toStrictEqual(routeList[1]);
    });

});