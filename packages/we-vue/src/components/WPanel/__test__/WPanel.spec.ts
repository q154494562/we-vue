import { shallowMount } from '@vue/test-utils'
import Panel from '../'

describe('panel', () => {
  test('create', () => {
    const wrapper = shallowMount(Panel, {
      propsData: {},
    })

    expect(wrapper.name()).toBe('w-panel')
    expect(wrapper.classes()).toContain('weui-panel')

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('render with title', () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'test-title',
      },
    })

    expect(wrapper.contains('.weui-panel__hd')).toBeTruthy()
    expect(wrapper.find('.weui-panel__hd').text()).toBe('test-title')

    expect(wrapper.html()).toMatchSnapshot()
  })
})
