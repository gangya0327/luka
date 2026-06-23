let routeTitle = ''
let siteTitle = ''

function setTitle() {
  console.log(routeTitle, '-', siteTitle)
  if (!routeTitle || !siteTitle) {
    document.title = 'loading...'
  } else if (routeTitle && siteTitle) {
    document.title = `${routeTitle} - ${siteTitle}`
  } else {
    document.title = routeTitle
  }
}

export default {
  setRouteTitle(title) {
    routeTitle = title
    setTitle()
  },
  setSiteTitle(title) {
    siteTitle = title
    setTitle()
  }
}