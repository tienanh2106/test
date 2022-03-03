// - khai bao bien
// var fullName = 'do tien anh';
// var age = 26;

// - goi ham thong bao
// alert(fullName);
// alert(age);

// - console
// console.log(fullName);
// console.warn(fullName);
// console.error(fullName);

// - cua so xac nhan
// confirm('xac nhan');
// prompt('xac nhan');

// - hien thi time chay sau 1s
// setTimeout(function() {
//     alert('thong bao')
// }, 1000)

// - hien di hien lai nhieu lan sau 1s
// setInterval(function() {
//     alert('thong bao'+Math.random);
// }, 1000)

// - toan tu
// + --> cong
// - --> tru
// * --> nhan
// ** --> luy thua
// / --> chia
// % --> lay so du
// ++ --> tang mot gia tri so
// -- --> giam mot gia tri so
// var a = 1+2;
// console.log(a);
// var b=1;
// var c=2;
// if(c>b){
//     alert('dung')}
// var a=5;
// var b=2;
// a++;
// console.log(a)
// var a=8; 
// console.log(++a)
// - chuoi
// var ten ='tien';
// var ho ='anh';
// console.log(ten+ho);
// - kieu boolean
// var a=9;
// var b=10;
// var isSuccess = a>b;
// console.log(isSuccess); 
// document.write(a)
// var ma = 'java hello'.includes('t',0);
// console.log(ma)

// var myInfor = {
//     name: 'tien anh',
//     age: 18,
// }
// myInfor.email='dotienanh'
// console.log(myInfor.name)
// var tuoi='age';
//  console.log(myInfor[tuoi])
//- date
// var date = new Date();
// console.log(date.toString());
// var date = Date();
// console.log(date);
// var year =date.getFullYear();
// var month =date.getMonth();
// var day =date.getDay();
// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(`${day}/${month}/${year}`)
 
// var date= 5;
// switch (date) {
//     case 2:
//         console.log('hom nay la thu 2');
//         break;
//     case 3:
//         console.log('hom nay la thu 3');
//         break;

//     default: console.log('kko biet')
//         break;
// }
//- toan tu 3 ngoi
// var course={
//     name:'java',
//     coin:299,
// };

// var result = course.coin > 0 ?`${course.coin} coin` : 'mien phi';
// console.log(result);

// var array = { 
//     name:'java',
//     age:'php',
//     pass:'css'}
//  var array2 = [
//        'java',
//        'php',
//        'css'] 
        
// console.log(array);
// var arrayleght=array2.length;
// for(var i=0;i<arrayleght;i++){
//     console.log(array2[i]);
// } 
// for(var key in array){
//     console.log(key)
// }
// for(var value of array2){
//     console.log(value)
// }
// for(var value of Object.keys(array)){
//     console.log(array[value])
// }
// var i=0;
// while( i<array2.length){
//     console.log(array2[i])
//     i++;
// }

// for(var i=0;i<10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }

// var array = [
//     [1,2],
//     [7,4],
//     [5,6]
// ]
// for(var i=0;i<array.length;i++){
//     for(var j=0;j<array[i].length;j++){
//         console.log(array[i][j])
//     }
// }
// - thao tac voi mang map
var array= [
    {
        id: 1,
        name: 'php',
        coin: 12, 
    },
    {
        id: 2,
        name: 'php1',
        coin: 12, 
    },
    {
        id: 3,
        name: 'php2',
        coin: 124, 
    },
    {
        id: 4,
        name: 'php3',
        coin: 123, 
    },
]
// doi cac phan tu trong mang bang vong lap
function arrayhandler(array){
    // console.log(array)
    return{
        id: array.id,
        name: `khoa hoc: ${array.name}`,
        coin: array.coin,
    }
}
var newarray = array.map(arrayhandler);
console.log(newarray)

var totalcoin=array.reduce(function(total,count){
    return total + count.coin;
},0)
console.log(totalcoin)