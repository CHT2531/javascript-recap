//Q1. Have a look at the following object literal.
const flight = {
    flightNumber: 2131,
    date: "2023-04-10",
    airline: {
        code: "FR",
        name: "Ryanair"
    },
    departure: {
        code: "MAN",
        name: "Manchester"
    },
    arrival: {
        code: "ACE",
        name: "Lanzarote"
    }
}

// Using this object literal, write console.log statements that will
// a) Output the flightNumber.
console.log(flight.flightNumber);
// b) Output the date. 
console.log(flight.date);
// c) Output the name of the arrival airport.
console.log(flight.arrival.name);
// d) Output the sentence 'Flight 2131 to Lanzarote will be departing from Manchester on 2023-04-10'
console.log(`Flight ${flight.flightNumber} to ${flight.arrival.name} will be departing from ${flight.departure.name} on ${flight.date}`);


//Q2. Have a look at the following arrays of objects. 
//These flight objects have exactly the same properties as in Q1, I've just removed the spacing and line breaks.

const flights = [
    {flightNumber: 2131, date:"2023-04-10", airline: {code: "FR", name: "Ryanair"}, departure:{code: "MAN", name: "Manchester"}, arrival:{code: "ACE",name: "Lanzarote"}},
    {flightNumber: 318,date: "2023-03-05",airline: {code: "AF",name: "Air France"},departure:{code: "MAN",name: "Manchester"},arrival:{code: "CDG",name: "Paris"}},
    {flightNumber: 217,date: "2023-02-12", airline: {code: "LS",name: "Jet2"},departure:{code: "LBA",name: "Leeds"},arrival:{code: "MAH",name: "Menorca"}}
]

//Using this array,, write console.log statements that will
//a) Using a forEach loop output the flight numbers i.e.
// 2131
// 318
// 217
flights.forEach(function(flight){
    console.log(flight.flightNumber);
})
//b) Output the airline code, flight number, date and airline name for each flight i.e.
// FR 2131 2023-04-10 Ryanair
// AF 318 2023-03-05 Air France
// LS 217 2023-02-12 Jet2
flights.forEach(function(flight){
    console.log(`${flight.airline.code} ${flight.flightNumber} ${flight.date} ${flight.airline.name}`);
})
//c) Can you filter out the flights that depart from Manchester. Use a forEach to display these filtered flights.
const manchesterFlights = flights.filter(function(flight){
    if(flight.departure.name === "Manchester"){
        return true;
    }
    return false;
})
console.log('Here are the Manchester flights');
manchesterFlights.forEach(function(flight){
    console.log(flight.flightNumber);
});

//Q3. Have a look at the following object literal. 

const filmObj = {
    title: "Jaws",
    year: 1975,
    duration: 128,
    genres:["drama","thriller"],
    cast: [
        {
            actor: "Roy Scheider",
            character: "Chief Martin Brody"
        },
        {
            actor: "Robert Shaw",
            character: "Quint"
        },
        {
            actor: "Lorraine Gary",
            character: "Ellen Brody"
        }
    ],
    getAge: function(){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.year;
    }
}

// Using this object literal, write console.log statements that will
// a) Output the title of the film.
console.log(filmObj.title);
// b) Output the sentence 'The film Jaws was released in 1975'.
console.log(`The film ${filmObj.title} was released in ${filmObj.year}`); 
// c) Using a forEach loop, output the genres of the film.
filmObj.genres.forEach(function(genre){
    console.log(genre);
})
// d) Output the name of the actor that plays Ellen Brody.
console.log(filmObj.cast[2].actor);
// e) Output the age of the film (you will  need to call the getAge() method).
console.log(filmObj.getAge())
// f) Using a forEach loop output the entire cast.
filmObj.cast.forEach(function(castMember){
    console.log(`${castMember.character} was played by ${castMember.actor}`);
})

//Q4. Create an object literal to represent a cake. 
//The object should have properties for type (a string), layers (a number), and ingredients (an array of strings). 
// Assign the newly created object to a variable named myCake. 
const myCake = {
    type: "Sponge",
    layers: 2,
    ingredients: ["flour","sugar","butter","eggs"],
    bake: function(){
        return `The ${this.type} cake is baking`;
    }
}
// Uncomment the following code to tests this works.
console.log(myCake.type) // e.g. Sponge
console.log(myCake.layers) // e.g. 2 
console.log(myCake.ingredients) // e.g. ["flour","sugar","butter","eggs"]

//Q5. Add a bake()  method to the object. bake() should return a string using the type value. 
// Again, here's some code to tests it works.
console.log(myCake.bake()) // e.g. The sponge cake is baking.

//Q6. Create a factory function that will create instances of cake objects. 
//The factory function should be named cake, it should accept three arguments and return a cake object. 
// const cakePrototype = {
//     bake: function(){
//         return `The ${this.type} cake is baking`;
//     }
// }
// function cakeFactory(type, layers, ingredients)
// {
//     const newCake = new Object(cakePrototype);
//     newCake.type = type;
//     newCake.layers = layers;
//     newCake.ingredients = ingredients;
//     return newCake;
// }
// Again, uncomment the following to test your code
// const chocCake = cakeFactory("Chocolate", 3, ["flour", "sugar", "chocolate", "eggs"]);
// const fruitCake = cakeFactory("Fruit", 2, ["flour", "sugar", "sultanas", "eggs"]);
// console.log(chocCake.bake()); // The Chocolate cake is baking. 
// console.log(`The ${fruitCake.type} has ${fruitCake.layers} layers.`); // The Fruit cake has 2 layers.

//Q7. Comment out the previous code. 
// Re-write this program to use a constructor function. Here are the tests:

// function Cake(type, layers, ingredients)
// {
//     this.layers = layers;
//     this.ingredients = ingredients;
//     this.type = type;
    
// }
// Cake.prototype.bake = function(){
//     return `The ${this.type} cake is baking`;
// }
// const chocCake = new Cake("Chocolate", 3, ["flour", "sugar", "chocolate", "eggs"]);
// const fruitCake = new Cake("Fruit", 2, ["flour", "sugar", "sultanas", "eggs"]);
// console.log(fruitCake.bake()); // The Fruit cake is baking. 
// console.log(`The ${chocCake.type} has ${chocCake.layers} layers.`); // The Chocolate cake has 3 layers.

//Q8. Comment out the previous code.
// Re-write the program to use ES2015 classes
// You can use the same tests as in Q7

class Cake{
    constructor(type, layers, ingredients)
    {
        this.layers = layers;
        this.ingredients = ingredients;
        this.type = type;
    }
    bake(){
        return `The ${this.type} cake is baking`;
    }
}

const chocCake = new Cake("Chocolate", 3, ["flour", "sugar", "chocolate", "eggs"]);
const fruitCake = new Cake("Fruit", 2, ["flour", "sugar", "sultanas", "eggs"]);
console.log(fruitCake.bake()); // The Fruit cake is baking. 
console.log(`The ${chocCake.type} has ${chocCake.layers} layers.`); // The Chocolate cake has 3 layers.
