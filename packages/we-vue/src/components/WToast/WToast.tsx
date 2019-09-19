import WVIcon from '../WIcon'
import WVSpinner from '../WSpinner'
import PopupMixin from '@/mixins/popup'

import mixins from '@/utils/mixins'
import { VNode } from 'vue'

export default mixins(
  PopupMixin
).extend({
  name: 'w-toast',

  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: 'success-no-circle',
    },
    type: {
      type: String,
      default: 'success',
      validator: (val: string) => {
        return (
          ['success', 'fail', 'loading', 'text', 'html'].indexOf(val) !== -1
        )
      },
    },
    spinnerType: {
      type: String,
      default: 'default',
    },
    message: {
      type: String,
      default: '',
    },
    maskClass: {
      type: String,
      default: 'weui-mask',
    },
  },

  render (): VNode {
    return (
      <transition
        enter-active-class="weui-animate-fade-in"
        leave-active-class="weui-animate-fade-out"
      >
        <div
          class={{
            'weui-toast': true,
            'weui-toast_text': this.type === 'text',
          }}
          ref="toast"
          vShow={this.visible}
        >
          {
            this.type !== 'text' && this.type !== 'loading' &&
              <WVIcon
                type={this.icon}
                class="weui-icon_toast"
              />
          }
          {
            this.type === 'loading' && this.spinnerType !== 'none' &&
              <WVSpinner
                size={25}
                type={this.spinnerType}
                class="weui-icon_toast"
              />
          }
          <p class="weui-toast__content" domPropsTextContent={this.message} />
        </div>
      </transition>
    )
  },
})
