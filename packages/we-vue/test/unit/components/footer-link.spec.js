import { shallowMount } from '@vue/test-utils'
import FooterLink from '@/components/footer/footer-link.ts'

describe('footer-link', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  test('create', () => {
    wrapper = shallowMount(FooterLink, {
      propsData: {},
    })

    expect(wrapper.name()).toBe('wv-footer-link')
    expect(wrapper.classes()).toContain('weui-footer__link')
  })

  test('text', () => {
    wrapper = shallowMount(FooterLink, {
      propsData: {
        text: 'test',
      },
    })

    expect(wrapper.text()).toBe('test')
  })

  test('handle click', () => {
    const routeLinkSpy = jest.fn()
    wrapper = shallowMount(FooterLink, {
      propsData: {},
      methods: {
        routeLink: routeLinkSpy,
      },
    })

    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(routeLinkSpy).toHaveBeenCalled()
  })
})