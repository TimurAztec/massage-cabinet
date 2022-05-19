function randNum(max: number, min: number = 1) {
    return Math.floor(Math.random() * max) + min;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export {
    randNum,
    sleep
}