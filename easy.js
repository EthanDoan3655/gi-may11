//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

var avg = [1.5, 3, 2.5, 1].reduce((p,c,_,a) => p + c/a.length,0);
console.log(avg)