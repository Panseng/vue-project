import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// 全局引入组件svg-icon
Vue.component('svg-icon', SvgIcon)

/**
 * 将svg文件夹内的所有*.svg文件引入上下文
 * webpack
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
