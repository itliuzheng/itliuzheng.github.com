import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


const requireComponent = require.context(
  '.',
  false,
  /base-\w+\.(vue|js)$/
);

//通用全局组件化
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
      camelCase(
        fileName.replace(/^\.\/_/, '')
          .replace(/\.\w+$/, '')
      )
    );
    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
})

