import imageUrl from '@/assets/loading.svg'
import styles from '@/styles/loading.module.less'

function getLoadingImage(el) {
  return el.querySelector('img[data-role="loading"]')
}

function createLoadingImage() {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = imageUrl
  img.className = styles.loading
  return img
}

export default function (el, binding) {
  const img = getLoadingImage(el)
  if (binding.value) {
    if (!img) {
      const newImg = createLoadingImage()
      el.appendChild(newImg)
    }
  } else {
    if (img) {
      img.remove()
    }
  }
}