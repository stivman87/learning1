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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();

    alert('Ежедневный бюджет '+ appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("ОШИБКА");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12+percent;
            alert( "Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items;
        while (typeof(items) !== "string" || items == "" || items == null) {
        items = prompt("что принесёт допольнительный доход? (Перечислите через запятую)", "");
        console.log(typeof(items));
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        document.write('Дополнительные способы заработка: ');
        appData.income.forEach(
            function(val1, ind1, appData) {
                let i = ind1+1;   
                document.write(i + "  -  " + val1 + ', ');
                
                }
        
        );
        console.log('Наша программа включает в себя данные: ');
        for(let key in appData) {
            console.log(key + '  -  ' + appData);
        }
        
    }
};
