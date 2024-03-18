// console.log('loop start');
 for (let i = 0; i < 10; i++) {
// 	console.log(i);
 }
// console.log('loop end');

// #1 Count down from 10 to 1.

 for (let i = 10; i >= 1; i--) {
// 	console.log(i);
 }

// #2 Output odd numbers from 1 to 10.

 for (let i = 1; i < 11; i += 2) {
// 	console.log(i);
 }

//  #3 Output even number from 1 to 10.

 for (let i = 2; i <= 10; i += 2) {
// 	console.log(i);
 }

// #4 Output multiples of 3, starting at 6 and ending at 60.

 for (let i = 6; i <= 60; i += 3) {
// 	console.log(i);
 }

// #5 Output an increasing number of # symbols, from 1 to 7, as shown below.
// Output string to the console.

for (let i = "#"; i <= "#######"; i += "#") {
// 	console.log(i);
 }

for (let i = "#"; i < "#######"; i += "#") {
	// console.log(i);
}

let sum = "";
for (let i = 1; i <= 7; i++) {
sum += "#";
//   console.log(sum);
}
 

// 3 ways to do one loop.

// 1
// const str = "Hello World";
// for (let i = 0; i < str.length; i++) {
// 	 console.log(str[i]);
// }

// 2
// const str = "Hello World";
// for (const i in str) {
// console.log(str[i]);
// }

// 3
// c for iteration instead of i. c for character

// const str = "Hello World";
// for (const c of str) {
// 	console.log(c);
// }

const str = "Hello World";

for (let i = 0; i < str.length; i++) {
	if (str[i] == "l") {
		continue;
	}

	// console.log(str[i]);
}
// while loops:

// initialization
// let x = 30;

// condition x > 0
// while (x > 0) {
// 	// afterthought
// 	x /= 2;  //x = x / 2
// 	x--;
// // condition x % 1 != 0
// 	if (x % 1 != 0) {
// 		break;
// 	}
	
	// console.log(x);
// }

// for loop:

// let x = 30;

// for (x = x/2 - 1; x >= 0; x = x/2 - 1) {
// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// // #1 Count down to 0 from a given number.
// let i = 10;

// while (i >= 0) {
// 	console.log(i);
// 	i--;
// }


// #2 Log integers in multiples of 3 as long as they are
// less than 35.

// 1 way to write this

// let i = 0;
// while (i < 35) {
// 	i++;
// 	if (i % 3 == 0) {
// 		console.log(i);
// 	}
// }

// ***** This is wrong maybe review later how you can do w/out
// if statement.

// let i = 0;

// while (i <= 35) {
// 	console.log(i);
// 	i += 3;
// 	i ++;
// }

// #3 Print integers in multiples of 5 as long as they are
//  less than 100.

// let i = 5;

// while (i <= 100) {
// 	console.log(i);
// 	i += 3;
// 	i += 5;
// }

// / #4 Print integers between 0 and 20 with the following
// conditions:

// All numbers divisible by 2 should be multiplied by 3 before
// they are output.

// All other integers should not be output.
// Print all prime numbers between 0 and 20.

//First attempt with kate.. not correct.

// let i = 1;

// while (i < 20) {
// 	i++;
// 	if (i % 2 === 0) {
// 		console.log(i, i * 3);
// 		i *= 3;
// 	}
// }

//Second attempt with Tabitha..correct.
// let i = 0;

// while (i <= 20) {
// 	i++;
// 	if (i % 2 === 0) {
// 		// console.log(i * 3);
// 	}
// }


// Romeo went to the vending machine to buy himself a cookie,
// which costs $4.He paid with a $10 bill, and
// the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

let cost = 4;
let bill = 10;
let quarters = 0;
let change = bill - cost; // 6

while (change > 0) {
	change -= 0.25;
	quarters++;
}
// different way to print console.log
// console.log('quarters:', quarters);
// console.log('dollars:', quarters / 4);
// console.log('change:', change);

// console.log(change, quarters / 4);

// write a while loop for the given ouput:
// 10 30 50 70 90


let a = 10;

while (a <= 90) {
	// console.log(a);
	a += 20;
}
	


// write a while loop for the given ouput:
// 20 40 60 80 100

let b = 20;

while (b <= 100) {
	// console.log(b);
	b += 20;
}
//can do this, this is long version i = i + 20;
// or can do this i += 20;
	

// This could be achived a few ways, be creative

// write a while loop that prints all numbers from 500-800
// only if they are divisible by 4

let c = 500;
while (c <= 800) {
  if (c % 4 === 0) {
    // console.log(c);
  }
  c++;
}

for (let i = 0; i < 5; i++) {
	console.log('outer: ', i);
	for (let j = 0; j < 5; j++) {
		console.log('inner:' ,j)
	}
}

// Prime number (a number only divisible by itself and 1)
// ex : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
// 4 is not a prime number.

for (let i = 2; i < 20; i++) {
	
	for (let j = 2; i < 20; i++) {

		let isPrime = true;

		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				// not prime
				isPrime = false;
				break;
			}
		}
		// is(isPrime) {
		//  console.log ( i, 'is prime')
		// }
	}

}

// Do while loop:
let x = 10;

do {
	x--;
	console.log(x);
} while (x > 50);

// labels example:

myLoop: while (condition) {
	// do the things
}

// Doing this allows us to break the outer loop from within the inner
// loop, which would otherwise not be possible.
// we can continue labeled loops from within nested loops.

let x = 1;
let y = 1;

myLoop: while (true) {
	console.log(`Outer loop ${x}.`);
	x++;

	while (true) {
		console.log(`Inner loop ${y}.`);
		y++;

		if (x == 5 && y % 5 == 0) {
			break myLoop;
		} else if (y % 5 == 0) {
			continue myLoop;
		}
	}
}

// for (let = i; i <5; i++)
//break; - will break out of the loop
//continue; with

// while loops are good for if you don't know how many loops
// you are doing

// complicated loops would be a while loop.
// coding problem or algorithms.
// more flexible more control.


let sum = 0;
for (let i = 0; i < 5; i++) {
	if (i % 2 === 0) continue;

sum += i;

}

console.log(sum);