import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Container from '../Container.vue'

describe('Container.vue', () => {
  it('should mount component', () => {
    expect(Container).toBeTruthy()

    const wrapper = mount(Container)

    expect(wrapper.html()).toContain('_container')
  })
})
