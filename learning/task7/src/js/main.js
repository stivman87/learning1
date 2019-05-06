let newCalc = document.getElementById('start'),
    budgetVal1 = document.getElementsByClassName('budget-value')[0],
    dayBudgetVal1 = document.getElementsByClassName('daybudget-value')[0],
    levelVal1 = document.getElementsByClassName('level-value')[0],
    expensesVal1 = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesVal1 = document.getElementsByClassName('optionalexpenses-value'),
    incomeVal1 = document.getElementsByClassName('income-value'),
    monthSavingsVal1  = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsVal1 = document.getElementsByClassName('yearsavings-value')[0],
    yearVal1 = document.getElementsByClassName('year-value')[0],
    monthVal1 = document.getElementsByClassName('month-value')[0],
    dayVal1 = document.getElementsByClassName('day-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.getElementById('savings'),
    chooseSum = document.getElementById('sum'),
    choosePercent = document.getElementById('percent'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
   
    let money, time;

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };

newCalc.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-DD-MM",'');
    money = +prompt("Ваш бюджет на месяц?",'');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет ???",'');
    }
    appData.budget = money;
    appData.time = time;
    budgetVal1.textContent = money.toFixed() + ' руб. ';
    yearVal1.value = new Date(Date.parse(time)).getFullYear();
    monthVal1.value = new Date(Date.parse(time)).getMonth() + 1;
    dayVal1.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
        for (let i = 0; i<expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                // console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                    i=i-1;
            }
        }
        expensesVal1.textContent = sum + ' руб.';
});

optionalExpensesBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesVal1[0].textContent += appData.optionalExpenses[i] + ' ';
    }  
    
});

countBudgetBtn.addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        dayBudgetVal1.textContent = appData.moneyPerDay + " руб.";

        if(appData.moneyPerDay < 100) {
            levelVal1.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelVal1.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelVal1.textContent = "высокий уровень достатка";
        } else {
            levelVal1.textContent = "ОШИБКА";
        }
    } else {dayBudgetVal1.textContent = "Произошла ошибка"; }
    
});

chooseIncome.addEventListener('input', function(){
    let items;
    while (typeof(items) !== "string" || items == "" || items == null) {
    items = chooseIncome.value;
    }
    appData.income = items.split(', ');
    incomeVal1[0].textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true) {
        appData.savings = false;
    } else { appData.savings = true;}
});
chooseSum.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            appData.monthIncome = sum*percent/100/12;
            appData.yearIncome = sum*percent/100;

        monthSavingsVal1.textContent = appData.monthIncome.toFixed(1);
        yearSavingsVal1.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            appData.monthIncome = sum*percent/100/12;
            appData.yearIncome = sum*percent/100;

        monthSavingsVal1.textContent = appData.monthIncome.toFixed(1);
        yearSavingsVal1.textContent = appData.yearIncome.toFixed(1);
    }
});


