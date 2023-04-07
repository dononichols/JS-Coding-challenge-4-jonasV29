// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's normal to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

/*
1.) Your task is to  calculate the tip, depending on the bill value.
Create a variable called 'tip' for this. It's not allowed to use 'if/else' statement.

2.) Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: 
'The bill was 275, the tip was 41.25, and the total value 316.25'

========
TEST DATA: Test for bill values 275, 40, and 430...
========
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT: Value X is between 50 and 300, if it's >=50 && <=300
*/

// 1.)
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; // the 0.15 came from 15% or 15/100=.15....

// 2.)
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)