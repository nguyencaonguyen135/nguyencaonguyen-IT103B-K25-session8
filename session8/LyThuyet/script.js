// forEach();
let listNumber = [10, 20, 30, 100, -20];

// for (let i = 0; i <= listNumber.length; i++) {
//         console.log(listNumber[i]);     
// }

listNumber.forEach((item, index, array) => {
    console.log(`element: ${item} ; index: ${index}`);
    
});


// map(): tạo ra mảng mới
let newArray = listNumber.map((number, index, array) => {
    let newNumber = number * 3;
    return newNumber;
});
console.log(newArray);


// filter() 
let so = [1, 2, 3, 4];
let newSo = so.filter((item, index, array) => {
    return item % 2 === 0;
});
console.log(newSo);
