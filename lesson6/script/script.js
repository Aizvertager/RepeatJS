let money,
// функция проверки вводимых данных
    start = function() {
        do {
            money = +prompt('Ваш месячный доход ?', '15000');
        }
        while (isNaN(money) || money === '' || money === null || !money);
    };
start();

let appData = {

    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 5,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let sum = 0;

        for (let i = 0; i < 2; i++) {
            
            let questionExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кварплата');
            
            do {
                sum = +prompt('Во сколько это обойдется?');
            } while (isNaN(sum) || sum === '' || sum === null || !sum);
            
            appData.expenses[questionExpenses] = sum;
        }

    },
    // Функция возвращает сумму всех расходов за месяц
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
        console.log('appData.expensesMonth: ', appData.expensesMonth);
    },
    getBudget: function() {

        appData.budgetMonth =  money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);

    },
// Подсчитывает за какой период будет достигнута цель, 
// зная результат месячного накопления и возвращает результат
    getTargetMonth: function() {

        let countTarget = Math.ceil(appData.mission / appData.budgetMonth);

        if (countTarget < 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Цель будет достигнута за ' + countTarget + ' месяцев');
        }
        return countTarget;
    },
// Функция выводит статус уровня дохода
    getStatusIncome: function() {

        if (appData.budgetDay > 800) {
            return 'Высокий уровень дохода';
        } if (appData.budgetDay > 300 && appData.budgetDay < 800) {
            return 'Средний уровень дохода';
        } if (appData.budgetDay > 0 && appData.budgetDay < 300) {
            return 'Низкий уровень дохода';
        } if (appData.budgetDay < 0) {
            return 'Что-то пошло не так';
        }

    }

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log('Ваш уровень дохода: ', appData.getStatusIncome());
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' : ' + appData[key] );
}
console.log(Object(appData));
