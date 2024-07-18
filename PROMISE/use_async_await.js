function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exampleAsyncFunction() {
    try {
        let i = 0;
        while (true) {
            console.log(i);
            await delay(2000);
            i++;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

exampleAsyncFunction();
