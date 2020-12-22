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