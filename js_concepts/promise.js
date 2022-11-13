// Promise
const render = () => console.log('rendering...');

const timeout = time => (resolve, reject) => {
    setTimeout(() => resolve('promise : '), time);
}

const delay = time => new Promise(timeout(time));

delay(3000)
    .then((msg) => {
        console.log(msg + '처리중');
        return delay(2000);
    })
    .then((msg) => {
        console.log(msg + '여전히');
        return delay(1000)
    })
    .then((msg) => {
        console.log(msg + '곧완료');
        render();
    });

