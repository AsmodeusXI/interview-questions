/**
 * We want to be able to test the question of the difference between var, let, and const.
 */

'use strict';

// VAR: BCBD

var x = 'A';

if (true) {
  var x = 'B';
  console.log(x);
}

function printX() {
  var x = 'C';
  console.log(x);
}

printX();
console.log(x);

x = 'D';
console.log(x);

// LET: BCAD

let y = 'A';

if (true) {
  let y = 'B';
  console.log(y);
}

function printY() {
  let y = 'C';
  console.log(y);
}

printY();
console.log(y);

y = 'D';
console.log(y);

// CONST: BCA<break>

const z = 'A';

if (true) {
  const z = 'B';
  console.log(z);
}

function printZ() {
  const z = 'C';
  console.log('C');
}

printZ();
console.log(z);

z = 'D';
console.log(z);