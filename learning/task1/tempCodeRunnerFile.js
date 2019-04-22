let money, time;

function start() {
    
    time = prompt("Введите дату в формате YYYY-DD-MM",'');

    while(isNaN(money) || money == "" || noney == null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// Первый способ цикла через while

// let i=0;
// while(i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяцу"),
//         b = prompt("Во сколько это обойдётся");
//         appData.expenses[a] = b;
//         i++;
// }

// Второй способ цикла через for

// for(let i=0; i<2; i++) {

//     let a = +prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt('Во сколько это обойдётся');
    
//     appData.expenses[a] = b;
// }


// Третий вариант цикла через do while
function chooseExpenses() {
let i=0;

    do {
    let
    a = +prompt("Введите обязательную статью расходов в этом месяце"),
    b = +prompt('Во сколько это обойдётся');
    i++;
    if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else { i= i=1;}

    
        } while(i<2);
}

console.log(appData.expenses);
alert("Бюджет на 1 день: " + appData.budget/30 + 'руб.');
