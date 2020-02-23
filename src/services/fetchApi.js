const fetchData = () => {
    return fetch(
        'https://api-euwest.graphcms.com/v1/ck6qlqene8to301dh92tbhobs/master',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: 'query{ pushes { id content url } }',
            }),
            mode: 'cors',
        }
    ).then(response => Promise.all([response, response.json()]))
}

export { fetchData }
