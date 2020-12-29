/*
 
    Переменная lang может принимать 2 значения: 'ru' 'en'.
    Написать условия при котором в зависимости от значения lang будут 
    выводится дни недели на русском или английском языке. Решите задачу

        через if, 
        через switch-case 
        через многомерный массив без ифов и switch.
 */

let lang = 'en';

if (lang == 'ru') {
    console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
} if (lang == 'en') {
    console.log('mnn', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun');
}


switch (lang)  {

    case 'ru':
        console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
        break;
    case 'en':
        console.log('mnn', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun');
        break;
    default: 
        console.log('Ошибка');

}

let arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mnn', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
};

console.log(arr[lang]);