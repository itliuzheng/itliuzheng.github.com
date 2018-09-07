<template>
  <div class="container">
		<div class="header-container">
			<div id="drawMenu">
			</div>
			<div id="langMenu">
			</div>
			<div id="toggleTheme" class="theme-toggle">
					<i id="iconSun" class="icon-sun"></i>
					<i id="iconMoon" class="icon-moon" style="display: none;"></i>
			</div>
		</div>
		<div class="chart-container">
			<canvas class="chart-canvas" id="myChart" width="800" height="600"></canvas>
			<canvas class="chart-canvas" id="cursorChart" width="800" height="600"></canvas>
		</div>
		<div id="spinner" class="spinner">
			<i class="icon-spin5 animate-spin"></i>
		</div>
	</div>

</template>
<script>
  import mockData  from '@/components/component/stock/mock_data.vue'


  export default {
    name: 'clchart',
    mounted:function(){

      function _makeid () {
        let text = ''
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

        for (let i = 0; i < 20; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }

        return text
      }
      function _setMenusChecked (id, checked) {
        const dom = document.getElementById(id)
        if (dom) {
          dom.checked = checked
        }
      }
      function _setDomTxt (id, txt) {
        const dom = document.getElementById(id)
        if (dom) {
          dom.innerHTML = txt
        }
      }
      function _setMenusActive (menuId, activeDom) {
        const dom = document.getElementById(menuId)
        const menuItems = dom.getElementsByTagName('li')
        for (let i = 0; i < menuItems.length; i++) {
          const element = menuItems[i]
          element.className = element.className.replace(' active', '')
        }
        if (activeDom) {
          activeDom.className = activeDom.className + ' active'
        }
      }
      function ListMenus (parentId, arr, lang, icon) {
        this.menus = arr
        this.lang = lang
        this.icon = icon
        this.parentDom = document.getElementById(parentId)
        this.labeId = _makeid()
        this.checkId = _makeid()
        this.menusId = _makeid()
        this.active = arr[0]
        this.callback = function () {}

        this.createMenus = function (callback) {
          this.callback = callback || function () {}
          const itemHtml = this.createMenuItems()
          const ele = this.menus[0]
          const dataStr = this.createDataSet(ele)
          const html = `
            <div class="menu-container">
              <label ${dataStr} class="menu-label menu-item active" for="${this.checkId}" id="${this.labeId}">
                ${this.getLabelByLanguage(ele, this.lang)}
                ${this.getIcon()}
              </label>
              <input class="menu-check" type="checkbox" name="${this.checkId}" id="${this.checkId}">
              <ul class="menus" id="${this.menusId}">
                ${itemHtml}
              </ul>
            </div>
          `
          this.parentDom.innerHTML = html
          this.addListenr()
        }

        this.getIcon = function () {
          if (this.icon) {
            return `<i class="${this.icon}"></i>`
          }
          return ''
        }

        this.createMenuItems = function () {
          let html = ''
          for (let i = 0; i < this.menus.length; i++) {
            const ele = this.menus[i]
            const dataStr = this.createDataSet(ele)
            html += `<li ${dataStr} class="menu-item">${this.getLabelByLanguage(ele, this.lang)}</li>`
          }
          return html
        }

        this.getLabelByLanguage = function (ele, lang) {
          if (!ele) {
            return ''
          }
          if (ele[`label_${lang}`]) {
            return ele[`label_${lang}`]
          }
          return ele.label
        }

        this.createDataSet = function (ele) {
          let str = ' '
          for (const key in ele) {
            if (ele.hasOwnProperty(key)) {
              str += `data-${key}="${ele[key]}" `
            }
          }
          return str
        }

        this.setLanguage = function (lang) {
          this.lang = lang
          this.reset()
        }

        this.reset = function () {
          const items = this.parentDom.getElementsByClassName('menu-item') || []
          for (let i = 0; i < items.length; i++) {
            const ele = items[i]
            const data = ele.dataset || {}
            const label = this.getLabelByLanguage(data, this.lang)
            ele.innerHTML = label
          }
        }

        this.addListenr = function () {
          this.menuDom = document.getElementById(this.menusId)
          const self = this
          this.menuDom.addEventListener('click', function (e) {
            const activeMenuDom = e.target
            if (!activeMenuDom) {
              return
            }
            self.active = activeMenuDom.dataset
            _setMenusChecked(self.checkId, false)
            _setMenusActive(self.menusId, activeMenuDom)
            _setDomTxt(self.labeId, activeMenuDom.innerHTML)
            self.callback(self.active)
          })
        }
      }

      const _debounce = function debounce (func, wait, immediate) {
        var timeout, args, context, timestamp, result
        if (wait == null) wait = 100

        function later () {
          var last = Date.now() - timestamp

          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last)
          } else {
            timeout = null
            if (!immediate) {
              result = func.apply(context, args)
              context = args = null
            }
          }
        };

        var debounced = function () {
          context = this
          args = arguments
          timestamp = Date.now()
          var callNow = immediate && !timeout
          if (!timeout) timeout = setTimeout(later, wait)
          if (callNow) {
            result = func.apply(context, args)
            context = args = null
          }

          return result
        }

        debounced.clear = function () {
          if (timeout) {
            clearTimeout(timeout)
            timeout = null
          }
        }

        debounced.flush = function () {
          if (timeout) {
            result = func.apply(context, args)
            context = args = null

            clearTimeout(timeout)
            timeout = null
          }
        }

        return debounced
      }



      // fullCode: SH000001, SZ300545
      // type: CODE, RIGHT, NOW, MIN, TICK, DAY, DAY5, WEEK, MON, M5, M15, M30, M60, SEER,
      function getMockData(fullCode, type) {
        fullCode = fullCode || 'SZ300545'
        if (mockData[fullCode] && mockData[fullCode][type]) {
          return mockData[fullCode][type]
        }
        return []
      }

      function getBrowserVersion() {
        const ua = navigator.userAgent;
        return {
          trident: ua.indexOf('Trident') > -1, // IE内核
          presto: ua.indexOf('Presto') > -1, // opera内核
          webKit: ua.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
          gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1, // 火狐内核
          mobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
          ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
          android: ua.indexOf('Android') > -1, // android终端
          iPad: ua.indexOf('iPad') > -1, // 是否iPad
          uc: ua.indexOf('UCBrowser') > -1, // 是否UC浏览器
          qq: ua.indexOf('MQQBrowser') > -1, // 是否QQ浏览器
          weixin: ua.indexOf('MicroMessenger') > -1 // 是否微信
        }
      }

		// 开始画图
		const canvas = document.getElementById('myChart')
		const ctx = canvas.getContext('2d')
		const cursorCanvas = document.getElementById('cursorChart')
		const cursorCtx = cursorCanvas.getContext('2d')
		const syscfg = {
			scale: window.devicePixelRatio,
			axisPlatform: getBrowserVersion().mobile ? 'phone' : 'web',
			mainCanvas: {
				canvas: canvas,
				context: ctx
			},
			cursorCanvas: {
				canvas: cursorCanvas,
				context: cursorCtx
			}
		}
		const Chart = ClChart.createSingleChart(syscfg)
		// 画分钟线
		function handleMin (code) {
			console.log('Draw ====> Min Line')
			// 清除画布，及数据
			Chart.clear()
			// 初始化数据
			Chart.initData(20180620, ClChart.DEF_DATA.STOCK_TRADETIME)
			// 设置相应的数据
			Chart.setData('INFO', ClChart.DEF_DATA.FIELD_INFO, getMockData(code, 'INFO'))
			Chart.setData('MIN', ClChart.DEF_DATA.FIELD_MIN, getMockData(code, 'MIN'))
			Chart.setData('TICK', ClChart.DEF_DATA.FIELD_TICK, getMockData(code, 'TICK'))
			Chart.setData('NOW', ClChart.DEF_DATA.FIELD_NOW, getMockData(code, 'NOW'))
			// 设置画布尺寸
			let mainHeight = canvas.height * 2 / 3
			let mainWidth = Math.max(canvas.width * 0.65, canvas.width - 400)
			if (code === 'SH000001') mainWidth = canvas.width
			// 设置画布区域布局
			const mainLayoutCfg = {
				layout: ClChart.DEF_CHART.CHART_LAYOUT,
				config: ClChart.DEF_CHART.CHART_NOW,
				rectMain: {
					left: 0,
					top: 0,
					width: mainWidth,
					height: mainHeight
				}
			}
			const mainChart = Chart.createChart('MIN', 'CHART.LINE', mainLayoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(mainChart, 'MIN')

			const volumeLoyoutCfg = {
				layout: ClChart.DEF_CHART.CHART_LAYOUT,
				config: ClChart.DEF_CHART.CHART_NOWVOL,
				rectMain: {
					left: 0,
					top: mainHeight,
					width: mainWidth,
					height: canvas.height - mainHeight
				}
			}
			const volumeChart = Chart.createChart('MINNOW', 'CHART.LINE', volumeLoyoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(volumeChart, 'MIN')

			if (code !== 'SH000001') {
				const orderLayoutCfg = {
					layout: ClChart.DEF_CHART.CHART_LAYOUT,
					config: ClChart.DEF_CHART.CHART_ORDER,
					rectMain: {
						left: mainWidth,
						top: 0,
						width: canvas.width - mainWidth,
						height: canvas.height
					}
				}
				const orderChart = Chart.createChart('ORDER', 'CHART.ORDER', orderLayoutCfg, function (result) {
					//  console.log(result)
				})
				// Chart.bindData(orderChart, 'TICK')
			}

			Chart.onPaint()
		}
		// 画五日线
		function handleFiveDay (code) {
			console.log('Five Day Line')
			Chart.clear()
			Chart.initData(20180620, ClChart.DEF_DATA.STOCK_TRADETIME)
			Chart.setData('INFO', ClChart.DEF_DATA.FIELD_INFO, getMockData(code, 'INFO'))
			Chart.setData('DAY5', ClChart.DEF_DATA.FIELD_DAY5, getMockData(code, 'DAY5'))
			Chart.setData('MIN', ClChart.DEF_DATA.FIELD_MIN, getMockData(code, 'MIN'))
			const mainHeight = canvas.height * 2 / 3
			const mainLayoutCfg = {
				layout: ClChart.DEF_CHART.CHART_LAYOUT,
				config: ClChart.DEF_CHART.CHART_DAY5,
				rectMain: {
					left: 0,
					top: 0,
					width: canvas.width,
					height: mainHeight
				}
			}
			const KBarChart = Chart.createChart('DAY5', 'CHART.LINE', mainLayoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(KBarChart, 'DAY5')

			const volumeLoyoutCfg = {
				layout: ClChart.DEF_CHART.CHART_LAYOUT,
				config: ClChart.DEF_CHART.CHART_DAY5VOL,
				rectMain: {
					left: 0,
					top: mainHeight,
					width: canvas.width,
					height: canvas.height - mainHeight
				}
			}
			const KVBarChart = Chart.createChart('VLINE5', 'CHART.LINE', volumeLoyoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(KVBarChart, 'DAY5')

			Chart.onPaint()
		}
		// 画日线
		function handleKline (code, peroid) {
			let source = peroid
			if (peroid === 'WEEK' || peroid === 'MON') source = 'DAY'
			Chart.clear()
			Chart.initData(20180620, ClChart.DEF_DATA.STOCK_TRADETIME)
			Chart.setData('INFO', ClChart.DEF_DATA.FIELD_INFO, getMockData(code, 'INFO'))
			Chart.setData('RIGHT', ClChart.DEF_DATA.FIELD_RIGHT, getMockData(code, 'RIGHT'))
			Chart.setData(source, ClChart.DEF_DATA.FIELD_DAY, getMockData(code, source))
			const mainHeight = canvas.height * 2 / 3
			const mainLayoutCfg = {
				layout: {
					offset: {
						left: 5,
						right: 10
					}
				},
				buttons: ClChart.DEF_CHART.CHART_BUTTONS,
				config: ClChart.DEF_CHART.CHART_KBAR,
				rectMain: {
					left: 0,
					top: 0,
					width: canvas.width,
					height: mainHeight
				}
			}
			const KBarChart = Chart.createChart('KBAR', 'CHART.LINE', mainLayoutCfg, function (result) {
			})
			Chart.bindData(KBarChart, peroid)

			const volumeLoyoutCfg = {
				layout: {
					offset: {
						left: 5,
						right: 10
					}
				},
				config: ClChart.DEF_CHART.CHART_VBAR,
				rectMain: {
					left: 0,
					top: mainHeight,
					width: canvas.width,
					height: canvas.height - mainHeight
				}
			}
			const KVBarChart = Chart.createChart('VBAR', 'CHART.LINE', volumeLoyoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(KVBarChart, peroid)

			Chart.onPaint()
		}
		function handleSeer () {
			Chart.clear()
			Chart.initData(20180620, ClChart.DEF_DATA.STOCK_TRADETIME)
			Chart.setData('INFO', ClChart.DEF_DATA.FIELD_INFO, getMockData('SZ300545', 'INFO'))
			Chart.setData('RIGHT', ClChart.DEF_DATA.FIELD_RIGHT, getMockData('SZ300545', 'RIGHT'))
			Chart.setData('DAY', ClChart.DEF_DATA.FIELD_DAY, getMockData('SZ300545', 'DAY'))
			Chart.setData('SEER', ClChart.PLUGINS.FIELD_SEER, getMockData('SZ300545', 'SEER'))
			Chart.setData('SEERHOT', {}, ['15'])
			const mainHeight = canvas.height * 2 / 3
			const mainLayoutCfg = {
				layout: {
					offset: {
						left: 5,
						right: 100,
						top: 20,
						bottom: 20
					}
				},
				buttons: [ { key: 'zoomin' }, { key: 'zoomout' } ],
				config: ClChart.PLUGINS.CHART_SEER,
				rectMain: {
					left: 0,
					top: 0,
					width: canvas.width,
					height: mainHeight
				}
			}
			const KBarChart = Chart.createChart('SEER', 'CHART.LINE', mainLayoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(KBarChart, 'DAY')

			const volumeLayoutCfg = {
				layout: {
					offset: {
						left: 5,
						right: 100,
						top: 20,
						bottom: 0
					}
				},
				config: ClChart.DEF_CHART.CHART_VBAR,
				rectMain: {
					left: 0,
					top: mainHeight,
					width: canvas.width,
					height: canvas.height - mainHeight
				}
			}
			const KVBarChart = Chart.createChart('VBAR', 'CHART.LINE', volumeLayoutCfg, function (result) {
				//  console.log(result)
			})
			Chart.bindData(KVBarChart, 'DAY')

			Chart.onPaint()
		}

		const menuTypes = {
			MIN: handleMin,
			DAY5: handleFiveDay,
			DAY: handleKline,
			WEEK: handleKline,
			MON: handleKline,
			M5: handleKline,
			SEER: handleSeer
		}

		// 画图
		function drawChart (data) {
			data = data || {}
			const drawFunc = menuTypes[data.type]
			if (typeof drawFunc === 'function') {
				drawFunc(data.fc, data.type)
			}
		}

		const typeMenusCfg = [
			{ type: 'MIN', fc: 'SH000001', label_en: '1 min(Idx)', label_zh: '分时(指数)' },
			{ type: 'DAY5', fc: 'SH000001', label_en: '5 days(Idx)', label_zh: '五日(指数)' },
			{ type: 'MIN', fc: 'SZ300545', label_en: '1 min', label_zh: '分时' },
			{ type: 'DAY5', fc: 'SZ300545', label_en: '5 days', label_zh: '五日' },
			{ type: 'DAY', fc: 'SZ300545', label_en: '1 day', label_zh: '日K' },
			{ type: 'WEEK', fc: 'SZ300545', label_en: '1 week', label_zh: '周线' },
			{ type: 'MON', fc: 'SZ300545', label_en: '1 month', label_zh: '月线' },
			{ type: 'M5', fc: 'SZ300545', label_en: '5 min', label_zh: '5分钟' },
			{ type: 'SEER', fc: 'SZ300545', label_en: 'seer(extend)', label_zh: '预测' }
		]
		const langMenusCfg = [
			{ lang: 'zh', label: '中文', standard: 'china' },
			{ lang: 'en', label: 'English', standard: 'usa' }
		]
		let drawMenus
		let langMenus

		// window.onresize = window._debounce(function () {
		// 	canvas.width = canvas.clientWidth * window.devicePixelRatio
		// 	canvas.height = canvas.clientHeight * window.devicePixelRatio
		// 	drawChart(drawMenus.active)
		// }, 100)

			let lang = 'zh'
			const spinner = document.getElementById('spinner')
			spinner.style.display = 'none'
			drawChart(typeMenusCfg[0])
			drawMenus = new ListMenus('drawMenu', typeMenusCfg, lang)
			drawMenus.createMenus(function (activeData) {
				drawChart(activeData)
			})
			langMenus = new ListMenus('langMenu', langMenusCfg, lang, 'icon-language')
			langMenus.createMenus(function (activeData) {
				if (activeData.lang === lang) {
					return
				}
				lang = activeData.lang
				drawMenus.setLanguage(lang)
				Chart.setStandard(activeData.standard)
			});
			// 切换主题颜色
			let theme = 'black';
			function hanldeToggleTheme() {
				const sunDom = document.getElementById('iconSun')
				const moonDom = document.getElementById('iconMoon')
				if (theme === 'black') {
					moonDom.style.display = 'block'
					sunDom.style.display = 'none'
					theme = 'white'
				} else {
					moonDom.style.display = 'none'
					sunDom.style.display = 'block'
					theme = 'black'
				}
				document.body.className = 'theme-' + theme
				// let timer = Date.now()
				Chart.setColor(theme)
				// 需要手动onPaint一次
				Chart.onPaint()
				// console.log('-------', Date.now() - timer)
			}
			const toggleThemeDom = document.getElementById('toggleTheme');
			toggleThemeDom.addEventListener('click', hanldeToggleTheme)

    },
    methods:{
    }
  }

</script>
<style >
/* normalize */
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

canvas {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

html, body, .container {
  height: 100%;
  width: 100%;
  background-color: #3b3b42;
  color: #f5f5f5;
}

.theme-white .container {
  background-color: #f7f7f7;
  color: #232323;
}

a {
  color: #fff;
}
a:hover {
  color: #fff;
}

.theme-white a {
  color: #232323;
}
.theme-white a:hover {
  color: #232323;
}

.header-container {
  padding: 5px 0;
  height: 50px;
  background-color: #3b3b42;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 20px;
  line-height: 40px;
  -webkit-box-pack: justify;
    -ms-flex-pack: justify;
      justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.header-logo {
  font-size: 24px;
  margin-left: 10px;
}

.theme-toggle {
  font-size: 24px;
  margin-right: 10px;
}

.theme-white .header-container {
  background-color: #f7f7f7;
}

.chart-container {
  height: calc(100% - 50px);
  position: relative;
  text-align: left;
}

.chart-canvas {
  /*display: block;*/
  /*width: 100%;*/
  /*height: 100%;*/
}

#cursorChart {
  position: absolute;
  top: 0;
  left: 0;
}

.menu-container {
  height: 40px;
  width: 110px;
  position: relative;
}

.menu-label {
  display: block;
}

.menu-check {
  height: 0;
  width: 0;
  opacity: 0;
}

.menu-check:checked + .menus {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.menus {
  width: 110px;
  padding: 0;
  margin: 0;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #ccc;
}

.menu-item{
  height: 40px;
  border: 1px solid #494752;
  border-top: none;
  padding: 0 14px;
  font-size: 16px;
  line-height: 40px;
  text-decoration: none;
  background-color: #3b3b42;
  list-style: none;
  z-index: 9999;
}

.theme-white .menu-item {
  background-color: #f7f7f7;
}

.menu-item:first-child {
  border-top: 1px solid #494752;
}

.active {
  background-color: #006666;
}

.theme-white .active {
  background-color: #ccc;
}

.spinner {
  padding: 10px;
  font-size: 28px;
  line-height: 28px;
  position: fixed;
  top: 50%;
  left: 50%;
  color: #f5f5f5;
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.theme-white .spinner {
  background-color: #006666;
}

/*
   Animation example, for spinners
*/
.animate-spin {
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
  display: inline-block;
}
@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(359deg);
    -o-transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@-webkit-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(359deg);
    -o-transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@-o-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(359deg);
    -o-transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@-ms-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(359deg);
    -o-transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(359deg);
    -o-transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@font-face {
  font-family: 'fontello';
  src: url('/static/font/fontello.eot?92071439');
  src: url('/static/font/fontello.eot?92071439#iefix') format('embedded-opentype'),
       url('/static/font/fontello.woff2?92071439') format('woff2'),
       url('/static/font/fontello.woff?92071439') format('woff'),
       url('/static/font/fontello.ttf?92071439') format('truetype'),
       url('/static/font/fontello.svg?92071439#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('./font/fontello.svg?92071439#fontello') format('svg');
  }
}
*/

 [class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.icon-spin5:before { content: '\e838'; } /* '' */
.icon-seer-white:before { content: '\e853'; } /* '' */
.icon-angle-up:before { content: '\f106'; } /* '' */
.icon-angle-down:before { content: '\f107'; } /* '' */
.icon-sun:before { content: '\f185'; } /* '' */
.icon-moon:before { content: '\f186'; } /* '' */
.icon-language:before { content: '\f1ab'; } /* '' */

</style>
