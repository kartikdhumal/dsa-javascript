let prom = new Promise(((resolve, reject) => {
    let n = 5;
    let table = "";
    setTimeout(() => {
        table = `Multipication table of ${n}\n`;
        for (let i = 1; i <= 10; i++) {
            table += `${n} * ${i} = ${n * i}\n`;
        }
        resolve(table);
    }, 5000)
}));

prom.then((result0) => console.log(result0)
).catch((err) => console.log(err)).finally(() => console.log("Thank you for using promise"));