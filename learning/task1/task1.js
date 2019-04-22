let money, time;

function start() {
    
    time = prompt("Введите дату в формате YYYY-DD-MM",'');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}
 start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
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


function chooseExpenses() {
    for (let i = 0; i<2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдётся?', '');
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
                i=i-1;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert('Ежедневный бюджет '+ appData.moneyPerDay);
}

function detectLevel() {

    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("ОШИБКА");
    }
}

detectDayBudget();
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12+percent;
        alert( "Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();