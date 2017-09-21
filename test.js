/* let jedi = {
  name: 'Ahsoka',
  age: 16,
  sword: 'green',
  master: 'Anakin',
  rank: 'knight',
  slice: 'wooov'
};

function attack(options) {
  console.log(`${options.name} attacked the sith with ${options.slice}`);
}

function attackMore({ name = 'Obi', slice }) {
  console.log(`${slice} and you're dead by ${name}'s hand`);
}

attack(jedi);
attackMore(jedi);
*/
function byTen(arg) {
  return arg * 10;
}

console.log([1, 2, 3, 4, 5].map(byTen));
