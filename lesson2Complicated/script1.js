// 1) Создать переменную num со значением 266219
// Вывести в консоль произведение (умножение) цифр этого числа
// 2) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
// Вывести на экран первые 2 цифры полученного числа

let num = 266219;
let stringNum = num.toString().split('');
console.log('stringNum: ', stringNum);
let composition = 1;

for (var i = 0; i < stringNum.length; i++) {
    
    let nume = Number(stringNum[i]);
    composition *= nume;  
    
}
console.log('composition: ', composition);
let sqrComposition = composition ** 3;
console.log('sqrComposition: ', sqrComposition);
alert(sqrComposition.toString().substring(0, 2))
