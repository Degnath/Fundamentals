//1.
console.log(hello); //output will be undefined as var is defined after console
var hello = 'world';

//Correction
var hello = 'world';
console.log(hello);

//2.
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle); // console will output magnet as var is defined within the function and haystack is a global variable
}
// in order for us to print haystack the test() need to be called after the functions not before the function can run.

var needle;
needle = 'haystack';
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle); // console will output magnet as var is defined within the function and haystack is a global variable
}
test();

//3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//hoisting
console.log('!!!!!!!!!!!!!!!');
var brendan;
brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//hoising
console.log('$$$$$$$$$$$$')
var food;
food = "chicken";
console.log(food);
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
eat();

//5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// hoisting
console.log("*****************")
// var mean
// mean();
// console.log(food);
// mean=mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food)


//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//hoisting
console.log("@@@@@@@@@@@@@@@@@@@")
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);



//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//hoisting
console.log("********************")
dojo = "san jose";
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);

//8

