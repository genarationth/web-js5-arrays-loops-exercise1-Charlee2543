// #### 1.1 let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(myAlphabet.length);

// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets.
const listPlanets = ["Mercury","Venus","Mars","Jupiter","Saturn"];
listPlanets.forEach(function(planets){
    console.log(planets,planets.length);
});
    // #### 1.3 Console.log each item in this array: let myArr = [ 1, 2, 'One', true];
// loopArrays
let myArr = [ 1, 2, 'One', true];
myArr.forEach(function(show){
    console.log(show);
})