
const fetchAnything = (data) => {
  const fetchCall = fetch(data)
  .then(response => response.json())
  .catch(error => console.log(error.message))
  return fetchCall
}

export { fetchAnything }
