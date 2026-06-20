import eventBus from '@/bus/eventBus'
import { debounce } from '@/utils'
import defaultImg from '@/assets/default.jpg'

let imgs = []

function setImage(img) {
  img.dom.src = defaultImg

  const clientHeight = document.documentElement.clientHeight
  const rect = img.dom.getBoundingClientRect()
  const rectHeight = rect.height || 160
  if (rect.top >= -rectHeight && rect.top <= clientHeight) {
    const temp = new Image()
    temp.onload = function () {
      img.dom.src = img.src
    }
    temp.src = img.src
    imgs = imgs.filter(i => i !== img)
  }
}

function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll() {
  setImages()
}

eventBus.$on('mainScroll', debounce(handleScroll, 50))

export default {
  inserted(el, binding) {
    const img = { dom: el, src: binding.value }
    imgs.push(img)
    setImage(img)
  },
  unbind(el) {
    imgs = imgs.filter(img => img.dom !== el)
  }
}