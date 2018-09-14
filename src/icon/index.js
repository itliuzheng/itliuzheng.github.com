import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon',SvgIcon);

const svg = require.context('./svg',false,/\.svg$/);
let requireAll = requireContext => requireContext.keys().map(requireContext);

requireAll(svg)
