console.log("Hello again!");
let x = 123;
let y = 321;
let z;
z=x+y;
console.log("value of z: " + z);
if (z>10)
    console.log("big");
    else
        console.log("small");
console.log("Type of z: " + typeof(z));

var arr = [];
arr.push(68);
arr.push(89);
arr.push(96);
arr.push(77);
arr.push(86);
console.log(arr);
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
let avg = sum/arr.length;
console.log(avg);

function add(x,y){
    return x+y;
}
console.log("X+Y using function: " + add(x,y));
//Exercise 1, Looping to print a triangle.
let string = "";
for(let i = 0; i<7; i++){
    console.log(string+="#");
}

//Exercise 2 FizzBuzz
for(let i = 0; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0 ){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


//Exercise 3 Chessboard
let height = 3;
let print= " # # # #";
let print2= "# # # # ";

    for(let i = 0; i<height/2; i++){
        console.log(print);
        console.log(print2);
    }
