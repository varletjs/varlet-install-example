import App from '../src/App.vue'
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'

it('test App.vue mount', () => {
  const wrapper = mount(App)

  expect(wrapper.html()).toMatchSnapshot()
})
