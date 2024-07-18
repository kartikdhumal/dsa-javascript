function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve("Async operation 1 completed successfully");
            } else {
                reject("Async operation 1 failed");
            }
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation 2 completed successfully");
        }, 500);
    });
}

asyncOperation1()
    .then((result1) => {
        console.log(result1);
        return asyncOperation2();
    })
    .then((result2) => {
        console.log(result2);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Promise chain completed.");
    });
