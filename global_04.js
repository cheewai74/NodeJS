const waitTime = 3000;
console.log(`Setting a ${waitTime / 1000} seconds delay`);
// const timerFinished = () => console.log("done");

const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime =() => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}`);
    console.log(`waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterval);

// setInterval(incTime, waitInterval);