import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UsersForm from '../UsersForm.vue'

describe('UsersForm', () => {

    it('Renders, accepts input, emits event with proper payload', async () => {
        const wrapper = mount(UsersForm);
        
        const expectedObject = {
            'age': 55,
            'email': 'JohnDoe@email.com',
            'name': 'John',
          }

        expect(wrapper.text()).toContain('Submit');

        const input1 = wrapper.find('[data-testid="name-input"]');
        await input1.setValue('John');

        //CAN'T TEST InputNumber COMPONENT 
        wrapper.vm.age = 55;

        const input3 = wrapper.find('[data-testid="email-input"]');
        await input3.setValue('JohnDoe@email.com');

        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('submitForm')).toBeTruthy();
        const payload = wrapper.emitted('submitForm')[0][0];
        expect(payload).toStrictEqual(expectedObject);
    });
});
