let money = +prompt('Ваш месячный доход ?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    accumulatedMonth,
    expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    costExpenses1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    costExpenses2 = +prompt('Во сколько это обойдется?'),
    mission = 50000,
    period,
    budgetDay;

// Функция выводит тип переменной 
let showTypeof = function(data) {
    console.log(typeof(data));
};

showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);

// Функция возвращает сумму всех расходов за месяц
let getExpensesMonth = function() {
    return costExpenses1 + costExpenses2;
};
console.log('getExpensesMonth: ', getExpensesMonth());

// Функция возвращает Накопления за месяц (Доходы минус расходы) 
let getAccumulatedMonth = function() {
    return money - costExpenses2 - costExpenses1;
};
accumulatedMonth = getAccumulatedMonth();

// Подсчитывает за какой период будет достигнута цель, 
// зная результат месячного накопления и возвращает результат
let getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
};
console.log('getTargetMonth: ', getTargetMonth);

budgetDay = Math.floor(getAccumulatedMonth() / 30);

// Функция выводит статус уровня дохода
let getStatusIncome = function() {

    if (budgetDay > 800) {
        return 'Высокий уровень дохода';
    } if (budgetDay > 300 && budgetDay < 800) {
        return 'Средний уровень дохода';
    } if (budgetDay > 0 && budgetDay < 300) {
        return 'Низкий уровень дохода';
    } if (budgetDay < 0) {
        return 'Что-то пошло не так';
    }

};
console.log(getStatusIncome());

