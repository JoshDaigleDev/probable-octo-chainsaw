/* BROKEN DUE TO PRIMEVUE BUG: https://github.com/primefaces/primevue/issues/3933

import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import EndpointDropdown from '../EndpointDropdown.vue';
import Dropdown from 'primevue/dropdown';

describe("Endpoint Dropdown", () => {
    it("Renders and emits event", async () => {
        const routeList = [{name: "Users", path:"random-users"}, {name: "Words", path:"random-words"}];
        const startRoute = routeList[0]; 

        const wrapper = mount(EndpointDropdown, {
            global: {
                components: {
                    Dropdown
                }
            },

            props:{
                routes: routeList,
                startRoute: startRoute
            }
        });

        const input = wrapper.find('[data-testid="my-primevue-dropdown"]');
        await input.trigger('click');
    });

});
*/