import getComponentRootDom from "./getComponentRootDom"
import Icon from '@/components/Icon'
import styles from '@/styles/showMessage.module.less'

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type  消息类型：info，success，warn，error3
 * @param {Number} duration  消息显示时间
 * @param {HTMLElement} container  容器，消息会显示到该容器的正中心，否则显示到页面正中心
 */
export default function (options = {}) {
  const { content = '', type = 'info', duration = 2000, container = document.body, callback } = options

  const div = document.createElement('div')
  const iconDom = getComponentRootDom(Icon, { type: 'icon-mail', size: 20 })
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
  div.className = `${styles.message} ${styles['message-' + type]}`

  if (options.container && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  }

  container.appendChild(div)
  div.clientHeight; // 读取元素高度，强行触发浏览器重绘

  div.style.opacity = 1
  div.style.transform = 'translate(-50%, -50%)'

  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = 'translate(-50%, -25px)'
    div.addEventListener('transitionend', function () {
      div.remove()
      // 执行回调 
      callback && callback()
    }, { once: true })
  }, duration)
}