var names = ['Norma', 'Jason', 'Lucia', 'Michael', 'Franklin', 'Lester', 'Trevor', 'Wade'];
console.log("Names: ".concat(names));
var ages = [23, 24, 25, 26, 25, 27, 28, 29];
console.log("Ages: ".concat(ages));
var mix = ['Carmen', 98, true];
console.log("Mix: ".concat(mix));
var people = [
    { name: 'Jorge', age: 26, isDeveloper: false },
];
console.log('Initial list', people);
people.push({ name: 'Lucas', age: 30, isDeveloper: true });
console.log("Persons: ".concat(JSON.stringify(people, null, 2)));
// Tuple
var animals;
animals = ['Dog', 5, true];
console.log('Animal:', animals);
// Enumerations
var Week;
(function (Week) {
    Week["Monday"] = "Monday";
    Week["Tuesday"] = "Tuesday";
    Week["Wednesday"] = "Wednesday";
    Week["Thursday"] = "Thursday";
    Week["Friday"] = "Friday";
    Week["Saturday"] = "Saturday";
    Week["Sunday"] = "Sunday";
})(Week || (Week = {}));
var dayMonday = Week.Monday;
console.log('Day', dayMonday);
