import fetch from 'isomorphic-fetch'

const forumName = 'ciunkos'

const apiEndpoint = `https://disqus.com/api/3.0/forums/listThreads.json?forum=${forumName}`
const key = 'nJdchLe13iM0uRIx0oRmxVqZpoCW6oEU4Ak3yfhi76LmJEb0nrbbZ4GMe2XJsUyQ'

const enpoint = `${apiEndpoint}&api_key=${key}`

export const getPosts = async () => {
  const response = await fetch(enpoint)
  if (!response.ok) {
    throw Error(response.statusText)
  }
  const data = await response.json()
  return data
}

export default {
  getPosts
}
