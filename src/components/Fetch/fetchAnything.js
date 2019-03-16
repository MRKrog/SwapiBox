const fetchAnything = (url) => {
  return fetch(url)
  .then(response => {
    if(!response.ok) {
      throw new Error('Response not ok')
    }
    return response.json()
  })
}

export { fetchAnything }
