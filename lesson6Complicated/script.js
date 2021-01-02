/**
 * Создать массив week и записать в него дни недели в виде строк

·        Вывести на экран все дни недели

·        Каждый из них с новой строчки

·        Выходные дни - курсивом

·        Текущий день - жирным шрифтом(использовать объект даты)
 */

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    now = new Date();

for (let i = 0; i < week.length; i++) {
    let nowDay = now.getDay() - 1;
   
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        console.log(week[i].italics());
    } else {
        console.log(week[i]);
    }
    if (nowDay == i) {
        console.log(week[i].bold());
    }
}
