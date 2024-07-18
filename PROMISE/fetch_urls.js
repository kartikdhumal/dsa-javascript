async function fetchUrls(urls) {
    const fetchPromises = urls.map(url => fetch(url));

    return await Promise.all(fetchPromises)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching URLs:', error);
            throw error;
        });
}

const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];

fetchUrls(urls)
    .then(results => console.log('Fetched data:', results))
    .catch(error => console.error('Failed to fetch data:', error));
