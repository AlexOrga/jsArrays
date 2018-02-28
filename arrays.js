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
