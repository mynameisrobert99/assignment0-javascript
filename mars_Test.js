let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToTheMoon = 384400;
const milesPerKilometer = 0.621;

let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

let milesToMoon = distanceToTheMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon /24;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToTheMoon);
console.log(typeof milesPerKilometer);

console.log(shuttleName, 'will take' , daysToMars, 'days to reach mars')
console.log(shuttleName, 'will take' , daysToMoon, 'days to reach the moon')
