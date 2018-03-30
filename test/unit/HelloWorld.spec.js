import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    const wrapper = mount(HelloWorld)
    test('should have the correct title', () => {
        const titleText = wrapper.find('h1.title').text()
        expect(titleText).toBe('This is title')
    })
})