const scrollToTop = () => window.scrollTo(0, 0)

export const push = (url, data, title) => {
  window.history.pushState(data, title, url)
  window.dispatchEvent(new Event('popstate'))

  if (!url.includes('#')) {
    scrollToTop()
  }
}

export const replace = (url, data, title) => {
  window.history.replaceState(data, title, url)
  window.dispatchEvent(new Event('popstate'))

  if (!url.includes('#')) {
    scrollToTop()
  }
}
