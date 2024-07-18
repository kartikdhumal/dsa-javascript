function fetchDataFromAPI(apiUrl) {
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        throw error;
      });
  }
  
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/28';
  
  fetchDataFromAPI(apiUrl)
    .then(data => console.log('Data from API:', data))
    .catch(error => console.error('Failed to fetch data from API:', error));
  