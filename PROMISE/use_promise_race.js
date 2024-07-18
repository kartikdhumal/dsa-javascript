function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation 1 completed");
        }, 1500);
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation 2 completed");
        }, 1000);
    });
}

function asyncOperation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation 3 completed");
        }, 2000);
    });
}

let promises = [asyncOperation1(), asyncOperation2(), asyncOperation3()];
Promise.race(promises).then((result) => {
    console.log("All operations completed successfully");
    console.log(result);
})
    .catch((error) => {
        console.error("Error:", error);
    });