const fetchData = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    return fetch(URL, { method: 'GET' }).then(response =>
        Promise.all([response, response.json()])
    )
}

export { fetchData }
