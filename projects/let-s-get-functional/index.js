// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    cd .. (until you are in the higher-most directory)
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    /*
    let count = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i]['gender'] === 'male'){
            count += 1
        }
    }

    return count;
    */


    // Professor provided this example in-class, review it for understanding
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })

    return males.length; // Returns the length of the array returned by _.filter

};

var femaleCount = function(array){

    /*
    let count = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i]['gender'] === 'female'){
            count += 1
        }
    }

    return count;
    */

    // Professor provided this example in-class, review it for understanding
    // so basically our callback function makes an accumulator
    // each iteration, if the conditions are true, the accumulator increases
    // after each iteration, the return value of our callback is the current accumulator value
    // the output return value of _.reduce is updated each iteration is equal to the return value of the callback function
    // the return value of _.reduce is equal to output
    let females = _.reduce(array, function(accumulator, current){
        if (current.gender === 'female'){
            accumulator += 1;
        }
        return accumulator;
    }, 0);
    
    return females;

};

var oldestCustomer = function(array){

/*
    // should be starting at index[0]
    // if the current["age"] (age property of current object)
    // is greater than the number stored in previous["age"] (age property of previous object)
    // then the previous object will now point to the current object
    // each iteration should access the "age" property of the previous object

    let oldest = _.reduce(array, function(previous, current){
        if (current.age > previous.age){
            return current;
        } else {
            return previous;
        }
    }, 0);

    return oldest.name;
*/

    let oldestAge = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i]['age'] > oldestAge){
            oldestAge = array[i]['age'];
        }
    }

    for (let i = 0; i < array.length; i++){
        if (array[i]['age'] === oldestAge){
            return array[i]['name'];
        }
    }

};

var youngestCustomer = function(array){

    let youngestAge = 99999;

    for (let i = 0; i < array.length; i++){
        if (array[i]['age'] < youngestAge){
            youngestAge = array[i]['age'];
        }
    }

    for (let i = 0; i < array.length; i++){
        if (array[i]['age'] === youngestAge){
            return array[i]['name'];
        }
    }
};



var averageBalance = function(array){

    // Balance has a string value of "$####.##"
    // we need to convert the value to a number with the +() operator
    // but first we need to remove the $, then our code will produce the desired result
    
    let accumulator = 0;

    for (let i = 0; i < array.length; i++){
      let localBalance = array[i]['balance'].split("");
      let balanceToNumber = [];
      for (let x = 0; x < localBalance.length; x++){
        if (localBalance[x] === "1" || localBalance[x] === "2" || localBalance[x] === "3"|| localBalance[x] === "4" || localBalance[x] === "5" || localBalance[x] === "6" || localBalance[x] === "7" || localBalance[x] === "8"|| localBalance[x] === "9" || localBalance[x] === "0" || localBalance[x] === "."){
          balanceToNumber.push(localBalance[x])
        }
      }
      
      balanceToNumber = +(balanceToNumber.join(""));
      accumulator += balanceToNumber
      
    }
  
  return +(accumulator.toFixed(2)) / array.length;
    
};


var firstLetterCount = function(array, char){

    // initializing of count accumulator
    let count = 0;

    // for each object in the array
    for (let i = 0; i < array.length; i++){

        // if the current object, name property, first character matches that of the char argument
        if (array[i]['name'][0].toUpperCase() === char.toUpperCase()){

            // increment our counter
            count += 1
        }

    }

    return count;

};

var friendFirstLetterCount = function(array, targetName, char){

    // for each item in our dataset
    for (let i = 0; i < array.length; i++){

        // if the current item has a name property which matches targetName
        if (array[i]['name'] === targetName){

            return firstLetterCount(array[i]['friends'], char);

        }

    }

};

var friendsCount = function(array, targetName){

    // Output will be an array as dictated in .spec
    let output = [];

    // for each person (object) in the array argument
    for (let i = 0; i < array.length; i++){

        // if that current person is not our targetName
        if (array[i]['name'] !== targetName){

            // for each person in their friends list (friends property array)
            for (let x = 0; x < array[i]['friends'].length; x++){

                // if the current person in their friends list matches the targetName
                if (array[i]['friends'][x]['name'] === targetName){

                    // push the current person (not friends list) to an output array
                    output.push(array[i]['name']);

                }

            }

        }
    }

    return output;

};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
