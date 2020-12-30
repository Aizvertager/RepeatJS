let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    accumulatedMonth,
    expenses1,
    costExpenses1,
    expenses2,
    costExpenses2,
    mission = 50000,
    period,
    budgetDay;

// функция проверки вводимых данных
let start = function() {

    do {
        money = +prompt('Ваш месячный доход ?');
    }
    while (isNaN(money) || money === '' || money === null || !money);

};
start();

// Функция выводит тип переменной 
let showTypeof = function(data) {
    console.log(typeof(data));
};
showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);


// Функция возвращает сумму всех расходов за месяц
let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if( i === 0 ) {
            expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кварплата');
        }

        if( i === 1 ) {
            expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Такси');
        }

        do {
            sum += +prompt('Во сколько это обойдется?');
        } while (isNaN(sum) || sum === '' || sum === null || !sum);
        
    }
    return sum;
};

// Переменная expensesMonth - все расходы
// Переменная accumulatedMonth - чистая прибыль
let expensesMonth = getExpensesMonth();
accumulatedMonth = money - expensesMonth;

// Подсчитывает за какой период будет достигнута цель, 
// зная результат месячного накопления и возвращает результат
let getTargetMonth = function() {
    let countTarget = Math.ceil(mission / accumulatedMonth);

    if (countTarget < 0) {
        console.log('“Цель не будет достигнута”');
    } else {
        console.log('“Цель будет достигнута”');
    }
    return countTarget;
};
console.log('getTargetMonth: ', getTargetMonth());


// Функция выводит статус уровня дохода
let getStatusIncome = function() {
    budgetDay = Math.floor(accumulatedMonth / 30);

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