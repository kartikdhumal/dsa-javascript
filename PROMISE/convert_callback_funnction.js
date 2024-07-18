function delayCallback(ms, callback) {
    setTimeout(() => {
        callback(null, `Operation completed after ${ms} milliseconds`);
    }, ms);
}

function delayPromise(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Operation completed after ${ms} milliseconds`);
        }, ms);
    });
}

delayCallback(2000, (err, message) => {
    if (err) {
        console.error('Callback-based function Error:', err);
    } else {
        console.log('Callback-based function:', message);
    }
});

delayPromise(3000)
    .then(message => {
        console.log('Promisified function:', message);
    })
    .catch(err => {
        console.error('Promisified function Error:', err);
    });
