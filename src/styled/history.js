export const push = (url, data, title) => {
  window.history.pushState(data, title, url)
  window.dispatchEvent(new Event('popstate'))
}

export const replace = (url, data, title) => {
  window.history.replaceState(data, title, url)
  window.dispatchEvent(new Event('popstate'))
}
