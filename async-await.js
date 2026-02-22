// Node.js Async/Await Example
const condition = false; // Change this to false to see error handling

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (condition) {
            resolve('Success with async/await!');
        } else {
            reject('Failure with async/await!');
        }
    }, 1000);
});

async function myFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();
