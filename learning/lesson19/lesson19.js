let timeId = setInterval(sayHello, 3000);

function sayHello() {
    console.log('Hello World');
}

clearInterval(timeId);