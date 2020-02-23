const fetchData = () => {
    return fetch(
        'https://api-euwest.graphcms.com/v1/ck6qlqene8to301dh92tbhobs/master',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `query{ 
                    events {
                        id
                        date
                        artist {
                        id
                        name
                        }
                        place {
                        id
                        }
                        type
                    }
                    artists {
                        id
                        name
                        style
                        description
                        rsLink1
                        rsLink2
                        rsLink3
                        image {
                        fileName
                        }
                    }
                    places {
                        id
                        name
                        description
                        localization {
                        latitude
                        longitude
                        }
                        category {
                        id
                        name
                        }
                    }
                    categories {
                        id
                        name
                    }
                    articles {
                        id
                        title
                        description
                        url
                        image {
                        fileName
                        }
                    }
                    faqs {
                        id
                        categoryFaq
                        question
                        answer
                    }
                    pushes {
                        id
                        content
                        url
                    }
                    sponsors {
                        id
                        name
                        description
                        url
                        image {
                        fileName
                        }
                    }                    
                 }`,
            }),
            mode: 'cors',
        }
    ).then(response => Promise.all([response, response.json()]))
}

export { fetchData }
