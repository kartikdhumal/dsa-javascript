const resolvedPromise = Promise.resolve('Resolved value');
const rejectedPromise = Promise.reject(new Error('Rejected'));

resolvedPromise.then(result => console.log('Resolved:', result));
rejectedPromise.catch(error => console.error('Rejected:', error));
