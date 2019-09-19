import { mount } from '@vue/test-utils'
import DialogApi from '../'
import Dialog from '../WDialog'
import { later } from '@/test/unit/utils'

describe('test dialog api', () => {
  afterEach(() => {
    DialogApi.close()
  })

  test('create a dialog', async () => {
    DialogApi.close()

    DialogApi({
      title: 'title',
      message: 'test message',
      skin: 'ios',
      showCancelButton: true,
    })

    await later(500)

    expect(document.querySelector('.weui-dialog')).toBeTruthy()
  })

  test('open an alert dialog', () => {
    DialogApi.alert({}).then(action => {
      expect(action).toBe('confirm')
    })

    expect(document.querySelector('.weui-dialog')).toBeTruthy()
    ;(document.querySelector('.weui-dialog__ft>.weui-dialog__btn_primary') as HTMLElement).click()
  })

  test('open a confirm dialog, and confirm it', () => {
    DialogApi.confirm({}).then(action => {
      expect(action).toBe('confirm')
    })

    expect(document.querySelector('.weui-dialog')).toBeTruthy()
    ;(document.querySelector('.weui-dialog__ft>.weui-dialog__btn_primary') as HTMLElement).click()
  })

  test('open a confirm dialog, and cancle it', () => {
    DialogApi.confirm({}).catch(action => {
      expect(action).toBe('cancel')
    })

    expect(document.querySelector('.weui-dialog')).toBeTruthy()
    ;(document.querySelector('.weui-dialog__ft>.weui-dialog__btn_default') as HTMLElement).click()
  })

  test('open a confirm dialog with callback', () => {
    DialogApi.confirm({
      callback: (action: string) => {
        expect(action).toBe('confirm')
      },
    })

    expect(document.querySelector('.weui-dialog')).toBeTruthy()
    ;(document.querySelector('.weui-dialog__ft>.weui-dialog__btn_primary') as HTMLElement).click()
  })

  test('setDefaultOptions & resetDefaultOptions method', () => {
    const opts = {
      title: 'foo',
    }

    DialogApi.setDefaultOptions(opts)
    expect(DialogApi.defaultOptions.title).toBe(opts.title)

    DialogApi.resetDefaultOptions()

    expect(DialogApi.defaultOptions.title).toEqual('')
  })
})

describe('dialog component', () => {
  test('create', () => {
    const wrapper = mount(Dialog, {
      propsData: {},
    })

    expect(wrapper.name()).toBe('w-dialog')
    expect(wrapper.contains('.weui-dialog')).toBeTruthy()
  })

  test('click cancel button', () => {
    const callback = jest.fn()

    const wrapper = mount(Dialog, {
      propsData: {
        'visible.sync': true,
        callback: callback,
      },
    })

    wrapper.findAll('.weui-dialog__btn').at(0).trigger('click')
    expect(wrapper.vm.visible).toBe(false)
    expect(wrapper.emitted().cancel).toBeTruthy()
    expect(callback).toHaveBeenCalled()
  })

  test('click confirm button', () => {
    const callback = jest.fn()

    const wrapper = mount(Dialog, {
      propsData: {
        'visible.sync': true,
        callback: callback,
      },
    })

    wrapper.findAll('.weui-dialog__btn').at(1).trigger('click')
    expect(wrapper.vm.visible).toBe(false)
    expect(wrapper.emitted().confirm).toBeTruthy()
    expect(callback).toHaveBeenCalled()
  })
})
