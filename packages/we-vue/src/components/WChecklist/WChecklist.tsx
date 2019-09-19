import '@/scss/checklist.scss'

import Vue from 'vue'

import { PropValidator } from 'vue/types/options'

interface options extends Vue {
}

export default Vue.extend<options>().extend({
  name: 'w-checklist',

  props: {
    max: {
      type: Number,
      validator: (val: number) => {
        return val >= 0
      },
    },
    title: String,
    align: {
      type: String,
      default: 'left',
      validator: (val: string) => {
        return val === 'left' || val === 'right'
      },
    },
    checkedColor: {
      type: String,
      default: '#09bb07',
    },
    options: {
      type: Array,
      required: true,
    } as PropValidator<any[]>,
    labelKey: {
      type: String,
      default: 'label',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    value: {
      type: Array,
      default: () => [],
    } as PropValidator<any[]>,
  },

  data () {
    return {
      currentValue: this.value,
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
      this.$emit('change', val)
    },

    currentValue (val) {
      if (this.max && val.length > this.max) {
        val = val.slice(0, this.max)
      }

      this.$emit('input', val)
    },
  },

  methods: {
    onClick  (option: any): void {
      if (option.disabled) {
        return
      }

      const value = typeof option === 'string' ? option : option[this.valueKey]
      if (this.currentValue.includes(value)) {
        this.currentValue = this.currentValue.filter(val => val !== value)
      } else {
        // DO NOT use push()
        this.currentValue = [...this.currentValue, ...[value]]
      }
    },

    isChecked (option: any): boolean {
      const value = typeof option === 'string' ? option : option[this.valueKey]
      return this.currentValue.includes(value)
    },
  },

  render () {
    return (
      <div>
        { this.title && <div class="weui-cells__title" domPropsInnerHTML={this.title} /> }
        <div class="weui-cells weui-cells_checkbox">
          {
            this.options.map(option => (
              <label
                key={option.label || option}
                class={{
                  'weui-cell': true,
                  'weui-check__label': true,
                  'weui-check__label-disabled': option.disabled,
                }}
                onClick={() => {
                  this.onClick(option)
                }}
              >
                {
                  this.align === 'left' &&
                    <div class="weui-cell__hd">
                      <i
                        style={{ color: this.checkedColor }}
                        class={{
                          'weui-icon-checked': true,
                          checked: this.isChecked(option),
                        }}
                      />
                    </div>
                }
                <div class="weui-cell__bd">
                  <p domPropsTextContent={option[this.labelKey] || option} />
                </div>
                {
                  this.align === 'right' &&
                    <div class="weui-cell__hd">
                      <i
                        style={{ color: this.checkedColor }}
                        class={{
                          'weui-icon-checked': true,
                          checked: this.isChecked(option),
                        }}
                      />
                    </div>
                }
              </label>
            ))
          }
        </div>
      </div>
    )
  },
})
