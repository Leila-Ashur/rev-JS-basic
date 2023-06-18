// using a callback function to calculate the sum of three numbers Asynchronously?
function sumOfNumbersAssynch(num1,num2,num3, callback) {
    setTimeout(function(){
        let sum =num1+num2+num3
        callback (sum);
        
    } ,5)
    }
    function callback (result) {
        console.log("the sum is",result);
        
    }
    sumOfNumbersAssynch(10,45,65,callback)

    // function called filterArray that takes an array of numbers and a callback 
    // function as parameters. The filterArray function should iterate through the
    //  array and apply the callback function to each element. The callback 
    // function should determine whether the element  should be included in the
    //  filtered array or not. The filtered array should then be returned as the 
    // result
    function filterArray(array,callback) {
        filterArray=[]
        for (let i = 0; i < array.length; i++) {
            if(  callback (array[i]));
            filterArray.push(array[i])
            return filterArray
            
        }
    
    }

    filterNumber=[1,2,3,47,5,]
    console.log(filterNumber);

    // Write a function that does the following:
//  Console logs the numbers from 1 to n where n is the integer the function
//   takes as its parameter      
//  Logs fizz instead of the number for multiples of 3 
//  Logs buzz instead of the number for multiples of 5
//  Logs fizzbuzz for numbers that are multiples of both 3 and 
//  Example: fizzBuzz(5)
function fizzBuzz(integer) {
    for (let i = 0; i <= integer; i++) {
        if (i%3==0 &&i%5==0) {
        
            console.log("fizzBuzz");
        }
         else if(i%5==0){
            console.log("buzz");
         }
         else if(i%3==0);{
            console.log("fizz");
         }
         
        }    
    }
fizzBuzz(50)
// 4. Given a string (“welcome to javascript class”), reverse each word in the
//  sentence. 
function reverseString(str) {
    
        var string = str.split(" ");
        var reversedString = [];
      
        for (var i = 0; i < string.length; i++) {
          var word = string[i];
          var reverseStr= string.split("").reverse().join("");
          reverseString.push(reverseStr);
        }
      
        var reversedString = reverseStr.join(" ");
        return reversedString;
      }
    

str="welcome to javascript"
console.log(str);
//    Explain what a callback function is and provide an example
    //  (Give a brief explanation and the example should be a code)
    //  (For the explanation, write it down on visual studio before 
    // you start your      code then comment it out)

    // Callback function is a function that is passed as an argument 
    // to another function and is intended to be educated at a specific time
    
    // passed as a parameter
    function Asynchronously(string,callback) {


      }

 
    

 

    
