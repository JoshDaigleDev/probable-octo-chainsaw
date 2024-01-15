import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WordsForm from '../WordsForm.vue'

describe('WordsForm', () => {
    it('Renders, accepts input, emits event with proper payload', async () => {
        const wrapper = mount(WordsForm);
        
        const expectedObject = {
            'words': 'some words',
            'author': 'John'
          }

        expect(wrapper.text()).toContain('Submit');

        const input1 = wrapper.find('[data-testid="words-input"]');
        await input1.setValue('some words');

        const input2 = wrapper.find('[data-testid="author-input"]');
        await input2.setValue('John');

        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('submitForm')).toBeTruthy();
        const payload = wrapper.emitted('submitForm')[0][0];
        expect(payload).toStrictEqual(expectedObject);
    });
});
