function asyncOperation1(n, delay) {
    return new Promise(((resolve, reject) => {
        let table = "";
        setTimeout(() => {
            table = `Multipication table of ${n}\n`;
            for (let i = 1; i <= 10; i++) {
                table += `${n} * ${i} = ${n * i}\n`;
            }
            resolve(table);
        }, delay * 1000)
    }));
}

asyncOperation1(12, 5).then((result0) => console.log(result0)
).catch((err) => console.log(err)).finally(() => console.log("Thank you for using promise"));