const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Promise 1 resolved');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'Promise 2 rejected');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'Promise 3 resolved');
});

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log('Resolved:', result.value);
            } else if (result.status === 'rejected') {
                console.log('Rejected:', result.reason);
            }
        });
    })
    .catch(error => {
        console.error('Error during Promise.allSettled:', error);
    });
