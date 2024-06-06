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

    let oldestAge = _.reduce(array, function(previous, current){
        if (current.age > previous){
            console.log(previous);
            return current.age;
        }
    }, 0);

    for (let i = 0; i < array.length; i++){
        if (array[i]['age'] === oldestAge){
            return array[i]['name'];
        }
    }

};

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

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
