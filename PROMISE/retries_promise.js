let inter = setInterval(() => {
    var i = 0;
    console.log(i);
    i++;
}, 2000)
clearInterval(inter);

function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('Operation successful');
            } else {
                reject(new Error('Network request failed'));
            }
        }, 500);
    });
}

function retryOperation(operation, maxRetries, delay = 1000) {
    return new Promise((resolve, reject) => {
        let retries = 0;

        function attempt() {
            operation()
                .then(resolve)
                .catch(error => {
                    retries++;
                    if (retries <= maxRetries) {
                        console.log(`Retry ${retries} after ${delay}ms due to:`, error);
                        setTimeout(attempt, delay);
                    } else {
                        reject(new Error(`Exceeded maximum retries (${maxRetries}). Last error: ${error}`));
                    }
                });
        }

        attempt();
    });
}

retryOperation(simulateNetworkRequest, 3, 1000)
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Failed after retries:', error.message);
    });
