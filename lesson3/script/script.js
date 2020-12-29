let money = +prompt('Ваш месячный доход ?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costExpenses1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costExpenses2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - costExpenses1 - costExpenses2;
console.log('budgetMonth: ', budgetMonth);

let mission = 500;
let period = Math.ceil(mission / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if (budgetDay > 800) {
    alert('Высокий уровень дохода');
} if (budgetDay > 300 && budgetDay < 800) {
    alert('Средний уровень дохода');
} if (budgetDay > 0 && budgetDay < 300) {
    alert('Низкий уровень дохода');
} if (budgetDay < 0) {
    alert('Что-то пошло не так');
}

