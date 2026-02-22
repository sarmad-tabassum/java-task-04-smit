// let shape = '';

// for (let i=5; i>=1; i--){
//     for (let j=1; j<=i; j++){
//         shape += '* ' 
//     }
//     shape += '\n'
// }
// console.log(shape);


















// let shape = '';

// for (let i=1; i<=5; i++){
//     for (let j=1; j<=i; j++){
//         shape += i + ''
//     }
//     shape += '\n'
// }
// console.log(shape)






















// let shape = '';
// let row = 5;

// for (let i=1; i<=row; i++){
//     for (let s=1; s<=row-i; s++){
//         shape += '  '
// }
//     for (let j=1; j<=i; j++){
//         shape += j + ' '
//     }
//     shape += '\n'
    
// }
// console.log(shape)





















// let shape = '';
// let row = 5;

// for (let i=1; i<=row; i++){
//     let ch = 65;
//     for (let j=1; j<=i; j++){
//         shape += String.fromCharCode(ch) + ' '
//         ch++
//     }
//     shape += '\n'
// }
// console.log(shape)






















// let shape = '';
// let row = 5;

// for (let i=row; i>=1; i--){
//     for (let s=1; s<=i-1; s++){
//         shape += '  '
//     }

//   let stars = 2 * (row - i) + 1;  // simple formula
//     for (let j=1; j<=stars; j++){
//         shape += '* ' 
//     }
//     shape += '\n'
// }
// console.log(shape)





















// let shape = '';
// let row = 5;

// for (let i=1; i<=row; i++){
//     for (let s=1; s<=i-1; s++){
//         shape += '  '
//     }

//   let stars = 2 * (row - i) + 1;  // simple formula
//     for (let j=1; j<=stars; j++){
//         shape += '* ' 
//     }
//     shape += '\n'
// }
// console.log(shape)






















// let shape = '';
// let row = 5;

// for (let i=1; i<=row; i++){
//     for (let s=1; s<=row-i; s++){
//         shape += '  '
//     }

//     for(let j=1; j<=i; j++){
//         shape += j + ' '
//     }

//     for (let j=i-1; j>=1; j--){
//         shape += j + ' '
//     }

//     shape += '\n'
// }
// console.log(shape);






















// let shape = '';
// let row = 6;

// for (let i=row; i>=1; i--){
//     for (let s=1; s<=row-i; s++)[
//         shape += ' '
//     ]

//     let ch = 65
//     for (let j=1; j<=i; j++){
//         shape += String.fromCharCode(ch) + ' ' 
//         ch++
//     }
//     shape += '\n'
// }
// console.log(shape);





















// for (let s=1 ; s<=1; s++){

// let shape = '';
// let shape2 = ''
// let row = 3;


// for (let i=1; i<=row; i++){
//     for (let j=1; j<=i*2-1; j++){
//         shape += j + ' '
//     }
//     shape += '\n'
// }
// console.log(shape);


// for (let i=2; i>=1; i--){
//     for (let j=1; j<=i*2-1; j++){
//         shape2 += j + ' '
//     }
//     shape2 += '\n'
// }
// console.log(shape2);
// }























// let shape = '';
// let row = 4;

// for (let i=0; i<=row; i++){
//     for (let j=0; j<=row-i; j++){
//         shape += '* '
//     }

//     for (let j=0; j<=i*2-1; j++){
//         shape += '  '
//     }

//     for (let j=0; j<=row-i;j++){
//         shape += '* '
//     }
//     shape += '\n'
// }
// console.log(shape);






























// let shape = '';
// let row = 6;

// // top row
// for (let i = 0; i < row; i++) {
//     shape += '* ';
// }
// shape += '\n';

// // middle diagonal
// for (let i = row - 1; i >= 1; i--) {
//     for (let j = 0; j < i; j++) {
//         shape += '  ';
//     }
//     shape += '*\n';
// }

// // bottom row
// for (let i = 0; i < row; i++) {
//     shape += '* ';
// }

// console.log(shape);
























// let shape = '';
// let row = 5;

// // top
// for (let i = 0; i < row; i++) {
//     shape += '* ';
// }
// shape += '\n';

// // middle line
// for (let i = 0; i < row - 2; i++) {         // for stars count
//     shape += '* ';
//     for (let j = 0; j < row - 2; j++) {     //  for between space
//         shape += '  ';
//     }
//     shape += '*\n';
// }

// // bottom line
// for (let i = 0; i < row; i++) {
//     shape += '* ';
// }

// console.log(shape);


