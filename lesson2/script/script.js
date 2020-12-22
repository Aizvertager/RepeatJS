let money = 200;
let income = 'Фриланс';
let addExpenses = 'Ресторан, обед, магазин';
let deposit = true;
let mission = 500;
let period = 11;
let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
let lowerAddExpenses = addExpenses.toLowerCase();
let allExpenses = lowerAddExpenses.split(', '); 
console.log(allExpenses);

let persentBudgetDay = money % 30;

console.log(budgetDay);
console.log(persentBudgetDay);
