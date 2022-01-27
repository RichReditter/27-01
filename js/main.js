// let arr = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];

// function evenANDnegative(element){
//     return (element % 2 == 0 && element < 0)
// }
// firstTask = arr.find(evenANDnegative)
// console.log(firstTask)

// function even(element){
//     return (element % 2 == 0)
// }
// secondTask = arr.filter(even)
// console.log(secondTask)

// reversed = arr.reverse()
// console.log('Перевернутый массив: ',reversed)

// reduced = (previousElement, currentElement) => previousElement * currentElement
// console.log('Произведение: ',arr.reduce(reduced))

// let positiveArr = arr.filter( (e) => e > 0)
// console.log('Кол-во положительных чисел:',positiveArr.length)



// function plenty(){
//     return arr.filter( (e) => e > -2 && e < 10)
// }
// from2to10 = plenty()
// reducer = (previousValue, currentValue) => previousValue + currentValue
// let arithmetic = from2to10.reduce(reducer)
// arithmetic = ( arithmetic / from2to10.length )
// console.log('Среднее арифметрическое от -2 до 10: ',arithmetic)

// // Ласт задание

// let arr1 = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];
// let firstElement = [arr1.at(0)];

// for( let i = 0; i < arr1.length; i++ ) {
//     if ( firstElement.includes(i) ) {
//         console.log('Элемент повторяется')
//         break;
//     }
//     else{
//         firstElement.push(i)
//     }
// };
// console.log(firstElement)



//Создайте структуру с именем student, 
//содержащую поля: фамилия и инициалы, номер группы,
// успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа,
// упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов,
// имеющих оценки, равные только 4 или 5.
// function Student(firstName, lastName, groupNumber, rating){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.groupNumber = groupNumber;
//     this.rating = rating;
 
//     this.print = function (){
//         console.log( this.lastName + ' -  ' + this.groupNumber);
//     };
//     this.middleRating = function (){
//         return this.rating.reduce((r1, r2) => r1 + r2)/this.rating.length;
//     };
//     this.isPerfect = function (){
//         return this.rating.every( r => r >=4);
//     }
// }
 
// const student1 = new Student('Vasya1', 'Pupkin1', 12, [20,4,4,5,6]);
// const student2 = new Student('Vasya2', 'Pupkin2', 22, [4,30,4,5,6]);
// const student3 = new Student('Vasya3', 'Pupkin3', 32, [2,3,4,5,6]);
// const student4 = new Student('Vasya4', 'Pupkin4', 52, [2,3,40,5,6])
// const student5 = new Student('Vasya5', 'Pupkin5', 22, [2,3,4,5,6])
// const student6 = new Student('Vasya6', 'Pupkin6', 132, [2,3,4,5,6])
// const student7 = new Student('Vasya7', 'Pupkin7', 1112, [2,3,4,5,6])
 
// const students = [student1, student2, student3, student4,  student5, student6, student7];
// const best = students.filter( s => s.isPerfect())
// best.forEach(s => s.print())
// const sortedStudents = students.sort( (s1, s2) => s1.middleRating() - s2.middleRating());
// console.log(sortedStudents);





// Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.
// Ввести данные в массив из пяти элементов типа train, упорядочить элементы по номерам поездов.
// Добавить возможность вывода информации о поезде, номер которого введен пользователем.
// Добавить возможность сортировки массив по пункту назначения, причем поезда с одинаковыми пунктами назначения
// должны быть упорядочены по времени отправления.

function Train(town, trainNumber, time ){
    this.town = town;
    this.trainNumber = trainNumber;
    this.time = time

    


}


const train1 = new Train('Brest', 1112, 1300)
const train2 = new Train('Moscow',  1113, 1500)
const train3 = new Train('Peterburg',  1114, 1100)
const train4 = new Train('Saratov',  1115, 1900)

const trains = 

console.log(sortedNumbers)