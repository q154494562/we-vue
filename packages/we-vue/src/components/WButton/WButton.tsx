import Vue from 'vue'
import '@/scss/button.scss'

export default Vue.extend({
  name: 'w-button',

  props: {
    type: {
      type: String,
      default: 'default',
    },
    isLoading: Boolean,
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
  },

  computed: {
    classes (): object {
      const ret: any = {
        'weui-btn': true,
        'weui-btn_loading': this.isLoading,
        'weui-btn_mini': this.mini,
      }

      const classType = this.plain
        ? `weui-btn_plain-${this.type}`
        : `weui-btn_${this.type}`
      const classDisabled = this.plain
        ? 'weui-btn_plain-disabled'
        : 'weui-btn_disabled'

      ret[classType] = true
      ret[classDisabled] = this.disabled

      return ret as object
    },
  },

  methods: {
    onClick (event: MouseEvent): void {
      this.$emit('click', event)
    },
  },

  render () {
    return (
      <button
        class={this.classes}
        onClick={(e: MouseEvent) => { this.onClick(e) }}
        disabled={this.disabled}
      >
        { this.isLoading && <i class="weui-loading" /> }
        { this.$slots.default }
      </button>
    )
  },
})
