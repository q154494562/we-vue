// This file is auto gererated by build/build-entry.js
import Actionsheet from './actionsheet'
import Area from './area'
import Badge from './badge'
import Button from './button'
import Cell from './cell'
import CellSwipe from './cell-swipe'
import CellSwipeButton from './cell-swipe-button'
import Checklist from './checklist'
import Circle from './circle'
import DatetimePicker from './datetime-picker'
import Dialog from './dialog'
import Flex from './flex'
import FlexItem from './flex-item'
import Footer from './footer'
import FormPreview from './form-preview'
import Grid from './grid'
import GridItem from './grid-item'
import Group from './group'
import Header from './header'
import Icon from './icon'
import InfiniteScroll from './infinite-scroll'
import Input from './input'
import Lazyload from './lazyload'
import Loadmore from './loadmore'
import MediaBox from './media-box'
import NumberSpinner from './number-spinner'
import Panel from './panel'
import Picker from './picker'
import Popup from './popup'
import Progress from './progress'
import Radio from './radio'
import SearchBar from './search-bar'
import Slider from './slider'
import Spinner from './spinner'
import Swipe from './swipe'
import SwipeItem from './swipe-item'
import Switch from './switch'
import Tab from './tab'
import Tabbar from './tabbar'
import TabbarItem from './tabbar-item'
import Tabs from './tabs'
import Textarea from './textarea'
import Toast from './toast'
import TopTips from './top-tips'

const version = '3.0.0-alpha.2'
const components = [
  Actionsheet,
  Area,
  Badge,
  Button,
  Cell,
  CellSwipe,
  CellSwipeButton,
  Checklist,
  Circle,
  DatetimePicker,
  Dialog,
  Flex,
  FlexItem,
  Footer,
  FormPreview,
  Grid,
  GridItem,
  Group,
  Header,
  Icon,
  Input,
  Loadmore,
  MediaBox,
  NumberSpinner,
  Panel,
  Picker,
  Popup,
  Progress,
  Radio,
  SearchBar,
  Slider,
  Spinner,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Textarea,
  Toast,
  TopTips
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Actionsheet,
  Area,
  Badge,
  Button,
  Cell,
  CellSwipe,
  CellSwipeButton,
  Checklist,
  Circle,
  DatetimePicker,
  Dialog,
  Flex,
  FlexItem,
  Footer,
  FormPreview,
  Grid,
  GridItem,
  Group,
  Header,
  Icon,
  InfiniteScroll,
  Input,
  Lazyload,
  Loadmore,
  MediaBox,
  NumberSpinner,
  Panel,
  Picker,
  Popup,
  Progress,
  Radio,
  SearchBar,
  Slider,
  Spinner,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Textarea,
  Toast,
  TopTips
}

export default {
  install,
  version
}
