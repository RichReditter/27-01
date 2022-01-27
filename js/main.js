let arr = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];

function evenANDnegative(element){
    return (element % 2 == 0 && element < 0)
}
firstTask = arr.find(evenANDnegative)
console.log(firstTask)

function even(element){
    return (element % 2 == 0)
}
secondTask = arr.filter(even)
console.log(secondTask)

reversed = arr.reverse()
console.log('Перевернутый массив: ',reversed)

reduced = (previousElement, currentElement) => previousElement * currentElement
console.log('Произведение: ',arr.reduce(reduced))

let positiveArr = arr.filter( (e) => e > 0)
console.log('Кол-во положительных чисел:',positiveArr.length)



function plenty(){
    return arr.filter( (e) => e > -2 && e < 10)
}
from2to10 = plenty()
reducer = (previousValue, currentValue) => previousValue + currentValue
let arithmetic = from2to10.reduce(reducer)
arithmetic = ( arithmetic / from2to10.length )
console.log('Среднее арифметрическое от -2 до 10: ',arithmetic)

// Ласт задание

let arr1 = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];
let firstElement = [arr1.at(0)];

for( let i = 0; i < arr1.length; i++ ) {
    if ( firstElement.includes(i) ) {
        console.log('Элемент повторяется')
        break;
    }
    else{
        firstElement.push(i)
    }
};
console.log(firstElement)