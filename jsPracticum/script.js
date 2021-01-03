let money,
    validNum = function(n) {
        return (isNaN(n) || n === '' || n === null || n === 0);
    },
    validStr = function(s) {
        return (!isNaN(s) || s === '' || s === null);
    },
// функция проверки вводимых данных
    start = function() {
        do {
            money = +prompt('Ваш месячный доход ?', '15000');
        }
        while (validNum(money));
    };
start();

let appData = {

    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 5,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while (validStr(itemIncome));
            do {
                cashIncome = prompt('Сколько вы в месяц на этом зарабатываете?', '10000');
            } while (validNum(cashIncome));

            appData.income[itemIncome] = cashIncome;  
        }
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
        } while (validStr(addExpenses));
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let sum = 0;

        for (let i = 0; i < 2; i++) {
            
            let questionExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кварплата');
            
            do {
                sum = +prompt('Во сколько это обойдется?');
            } while (validNum(sum));
            
            appData.expenses[questionExpenses] = sum;
        }

    },
    // Функция перезаписывает массив addExpenses так, чтобы каждое слово начиналось с заглавной буквы и убирает впереди пробелы если они есть.
    editAddExpenses: function() {
        let arr = [];
        for (let i = 0; i < appData.addExpenses.length; i++) {
            if (appData.addExpenses[i].charAt(0) == ' ') {
                appData.addExpenses[i] = appData.addExpenses[i].replace(' ', '');
            }
            appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
            arr.push(appData.addExpenses[i]);
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

    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            do {
                appData.persentDeposit = prompt('Какой годовой процент', '10');
                // appData.moneyDeposit = prompt('Сколько у вас на депозите', 10000);
            } while (validNum(appData.persentDeposit));
            do {
                appData.moneyDeposit = prompt('Сколько у вас на депозите', 10000);
            }
            while (validNum(appData.moneyDeposit));
        }
    }, 
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }

};

appData.asking();
appData.editAddExpenses();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log('Ваш уровень дохода: ', appData.getStatusIncome());
appData.getInfoDeposit();
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' : ' + appData[key] );
}
console.log(Object(appData));