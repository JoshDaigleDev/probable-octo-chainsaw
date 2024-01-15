import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UsersForm from '../UsersForm.vue'

describe('UsersForm', () => {

    it('Renders, accepts input, sets local storage, emits event, proper payload, clears on submit', async () => {
        const wrapper = mount(UsersForm);

        const NAME_STORAGE_KEY = 'USER_FORM#NAME';
        const AGE_STORAGE_KEY = 'USER_FORM#AGE';
        const EMAIL_STORAGE_KEY = 'USER_FORM#EMAIL';

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

        //LOCAL STORAGE
        await wrapper.vm.$nextTick(); 
        const storedName = localStorage.getItem(NAME_STORAGE_KEY);
        const storedAge = localStorage.getItem(AGE_STORAGE_KEY);
        const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY); 
        expect(storedName).toBe('John');
        expect(storedAge).toBe('55');
        expect(storedEmail).toBe('JohnDoe@email.com');
        localStorage.clear();
        
        //EMITS EVENT
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('submitForm')).toBeTruthy();
        const payload = wrapper.emitted('submitForm')[0][0];
        expect(payload).toStrictEqual(expectedObject);
        
        //FORM CLEAR
        expect(wrapper.vm.name).toBe(null)
        expect(wrapper.vm.age).toBe(null)
        expect(wrapper.vm.email).toBe(null)

    });
});
