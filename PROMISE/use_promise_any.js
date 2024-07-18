const promises = [
    Promise.reject('Error 1'),
    Promise.resolve('Success 1'),
    new Promise((resolve, reject) => setTimeout(() => resolve('Success 2'), 1000))
  ];
  
  Promise.any(promises)
    .then(result => console.log('First resolved Promise:', result))
    .catch(error => console.error('All Promises were rejected:', error));
  