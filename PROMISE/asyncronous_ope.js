function batchOperations(tasks, batchSize) {
    const results = [];
  
    return new Promise((resolve, reject) => {
      function processBatch(index) {
        const batch = tasks.slice(index, index + batchSize);
        const batchPromises = batch.map(task => task());
  
        Promise.all(batchPromises)
          .then(batchResults => {
            batchResults.forEach((result, i) => {
              results[index + i] = result;
            });
  
            if (index + batchSize < tasks.length) {
              processBatch(index + batchSize);
            } else {
              resolve(results);
            }
          })
          .catch(reject);
      }
  
      processBatch(0);
    });
  }
  
  function asyncTask(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Task ${id} completed`);
      }, Math.random() * 1000);
    });
  }
  
  const tasks = [
    () => asyncTask(1),
    () => asyncTask(2),
    () => asyncTask(3),
    () => asyncTask(4),
    () => asyncTask(5)
  ];
  
  batchOperations(tasks, 2)
    .then(results => {
      console.log('Batched results:', results);
    })
    .catch(error => {
      console.error('Error in batch operations:', error);
    });
  