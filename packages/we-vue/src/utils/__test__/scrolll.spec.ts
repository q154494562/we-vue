import * as ScrollUtil from '@/utils/scroll'

describe('utils scroll', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  test('getScrollEventTarget method', () => {
    const element = document.createElement('div')

    element.style.overflowY = 'scroll'

    // append element to document
    document.body.appendChild(element)
    expect(ScrollUtil.getScrollEventTarget(element)).toBe(element)

    // overflowY is not 'scroll' or 'auto'
    element.style.overflowY = 'hidden'
    expect(ScrollUtil.getScrollEventTarget(element)).toBe(window)
  })

  test('getScrollTop method', () => {
    // the element has scrollTop property
    const element = { scrollTop: 10 } as HTMLElement

    expect(ScrollUtil.getScrollTop(element)).toBe(10)

    // the element has no scrollTop property
    const theWindow = { pageYOffset: 20 } as Window

    expect(ScrollUtil.getScrollTop(theWindow)).toBe(20)
  })

  test('setScrollTop method', () => {
    // the element has scrollTop property
    let element = { scrollTop: 0 } as HTMLElement

    ScrollUtil.setScrollTop(element, 10)

    expect(element.scrollTop).toBe(10)

    // the element HAS NO scrollTop property
    const scrollToSpy = jest.fn()
    element = {
      scrollX: 0,
      scrollTo: scrollToSpy,
    } as any

    ScrollUtil.setScrollTop(element, 10)

    expect(scrollToSpy).toHaveBeenCalledWith(0, 10)
  })

  test('getElementTop method', () => {
    // getElementTop of window
    expect(ScrollUtil.getElementTop(window)).toBe(0)

    const element = { getBoundingClientRect: () => {} } as HTMLElement

    const getBoundingClientRectStub = jest.spyOn(element, 'getBoundingClientRect')
    getBoundingClientRectStub.mockReturnValue({ top: 10 } as ClientRect)

    const getScrollTopStub = jest.spyOn(ScrollUtil, 'getScrollTop')
    getScrollTopStub.mockReturnValue(10)

    expect(ScrollUtil.getElementTop(element)).toBe(10)

    getBoundingClientRectStub.mockReset()
    getBoundingClientRectStub.mockRestore()
    getScrollTopStub.mockReset()
    getScrollTopStub.mockRestore()
  })

  test('getVisibleHeight method', () => {
    // getVisibleHeight of window
    expect(ScrollUtil.getVisibleHeight(window)).toBe(window.innerHeight)

    const element = { getBoundingClientRect: () => {} } as HTMLElement

    const spy = jest.spyOn(element, 'getBoundingClientRect')
    spy.mockReturnValue({ height: 10 } as ClientRect)

    expect(ScrollUtil.getVisibleHeight(element)).toBe(10)

    spy.mockReset()
    spy.mockRestore()
  })
})
