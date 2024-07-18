function multiplyAsync(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}

multiplyAsync(3)
    .then((result1) => {
        console.log("Result 1:", result1);
        return multiplyAsync(result1);
    })
    .then((result2) => {
        console.log("Result 2:", result2);
        return multiplyAsync(result2);
    })
    .then((result3) => {
        console.log("Result 3:", result3);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Sequential Promise chain completed.");
    });
