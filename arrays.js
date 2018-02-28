console.log('Hi');

// Challenge 1

var test1 = 'cat';
var test2 = 'racecar';
var test3 = 'bear';
var test4 = 'mom';
var tests = [test1, test2, test3, test4];
var i;

for (i = 0; i < tests.length; i += 1) {
    var string = tests[i];
    var splitString=string.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    if (string === joinArray){
         console.log('true');
    } else {
         console.log('false');
 }
}

// Exercise

var animals = ['fish', 'dog', 'cat'];
var animalsElement = document.getElementById("animals");
for(var i=0; i<animals.length; i++){
    animalsElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}

// Challenge 2

// var book1 = "Catch 22";
// var book2 = "Slaughterhouse 5";
// var book3 = "Fahrenheit 451";
// var bookArray = [book1, book2, book3];

// for(i=0; i<bookArray.length; i++){
//     var stringSplit = bookArray[i].split(' ').pop();
//     console.log(stringSplit);
// }

var book = "catch 22";
var bookSplit = book.split('');
var realNumz = [];

for(var j=0; j<bookSplit.length; j++){
    if( (bookSplit[j]*1)){
        realNumz.push(bookSplit[j]);
    }
}
console.log("realNumz:", realNumz.join(''));
