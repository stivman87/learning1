document.write('Привет!');
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-DD-MM");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let i=0;
while(i<2) {
    let a = prompt("Введите обязательную статью расходов в этом месяцу"),
        b = prompt("Во сколько это обойдётся");
        appData.expenses[a] = b;
        i++;
}
console.log(appData.expenses);
alert("Бюджет на 1 день: " + appData.budget/30 + 'руб.');
