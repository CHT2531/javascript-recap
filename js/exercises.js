
//1. Using these variables and a console.log() statement output the message 'Hi Fred. Your favourite colour is red. Your favourite website is http://www.hud.ac.uk'. 
//Make sure you use a template literal.

const username = "Fred";
const colour = "red";
const url="http://www.hud.ac.uk";

console.log(`Hello ${username}.`)


// 2. Have a look at the following variables
// a) Create a third variable, name it total. total should be assigned a value that is the sum of num1 and num2. Using these variables and a console.log() output the value of total e.g. '10 + 20 = 30'
// b) Create another variable, call it average. average should be assigned a value that is the mean average of num1 and $num. Again, use a console.log statement to output the value of average.


const num1=10;
const num2=20;


// 3. The following code declares an object.
// a) Using this object, a template literal, and a console.log(). Write a line of code that outputs 'The film Jaws was released in 1975'.
// b) Write an if statement that will test if the film's duration is longer than 2hrs (120 minutes). If it is, a console.log() should simply output 'over 2 hours'.


const filmObj = {
  title:"Jaws",
  year:1975,
  duration:124
}


// 4. Uncomment the following code. First, try and understand what the search() method does. Then try changing the value of the variable searchTerm to get different messages.

// let searchTerm = "a";
// console.log(filmObj.title.search(searchTerm)) //outputs 1, the search term is found at the second character in the string
// if(filmObj.title.search(searchTerm) > -1){
//   console.log(`The search term '${searchTerm}' was found in ${filmObj.title}`);
// }else{
//   console.log(`The search term ${searchTerm} was not found in ${filmObj.title}`);
// }




// 5. The following code declares an array of objects. 
// a) Using this array, write a line of code that outputs 'The film Jaws was released in 1975' to the console.
// b) Add another film to the array. Use a console.log statement to output the details of the new film.
// c) Use a forEach loop to output the details of each film in turn. 
//    If you are looking in the notes, make sure you are looking at arrays of objects i.e. https://github.com/CHT2531/javascript-recap/blob/master/notes.md#objects-and-arrays
// d) Use a filter to get all the films made in the 21st century. 


const films=[
  {title:"Jaws", year:1975, duration:124},
  {title:"Get Out", year:2017, duration:117},
  {title:"Winter's Bone", year:2010, duration:100},
  {title:"The Incredibles", year:2004, duration:115},
]


// 6. Look at the following code that declares a function
// a) Write a line of code that will call this function so that the console.log()message is displayed


function printDetails(){
  console.log(`Jaws was released in 1975. It is 124 minutes long. `)
}


// 7. The following all relate to the function you have just created
// a) Modify the function so that you can pass an argument for the title of the film. The function call will then look like the following:

//printDetails("Jaws"); //calls the printDetails function passing a single argument.

//b) Modify the function again so that you can also pass arguments for the year and duration.

//c) Re-write the function as a function expression. Check it still works

//d) Re-write the function as an arrow function. Again, check it still works. 


//8.  
//a) Instead of passing separate values for title, year and duration, can you pass a film object? The function call will look like the following:

//printDetails(filmObj); //calls the printDetails function passing the film object we created earlier (Q3) as an argument.
 

// b)Instead of passing a single object can you pass an array of film objects. 
//   Again we can use the array we declared earlier as part of Q5. 
//   You will need to use a forEach loop inside the function to iterate over the film objects.




// 9.
// Uncomment the following code. This function accepts a single argument, a film object.
// The function should test the year property of the object and return true if the film was made in the 21st century and false if it wasn't.
// The code beneath will test your function i.e. you should get a message  of 'It's not a 21st century film' (assuming filmObj is the one we declared for Q3).



// function is21stCentury(filmObj){
//   //add your code in here
// }

// //test for the function
// if(is21stCentury(filmObj)){
//   console.log("It's a 21st century film.");
// }else{
//   console.log("It's not a 21st century film.");
// }



// 10. Have a look at the following code. It calls a function getLongFilms(). getLongFilms() should accept an array of films. 
// This array of films should be filtered to remove films shorter than 120 minutes in length. 
// The filtered array of films should be returned. If you do this correctly, the code that follows will print out the titles of the matching films. 
// Again this assumes we are using the array of films created as part of Q5.



// function getLongFilms(films){
//   //add your code in here
// }

// const longFilms = getLongFilms(films);
// console.log("Here are all the films that are longer than 2 hours in length:")
// longFilms.forEach(function(film){
//     console.log(`${film.title}`);
// })

//11. Have a look at the following code. It calls a function searchFilms(). searchFilms() accepts two arguments,a search term and an array of films. The array of films should be filtered to only leave films where the title contains the search term. These films should be returned from the function. Again, this assumes we are using the array of films created as part of Q5. Have a look back at Q4 for an example of using the search() method of strings. 

// function searchFilms(films, searchTerm){
//   //add your code in here
// }

// let searchTerm = "t"
// const matchingFilms = searchFilms(films, searchTerm);
// console.log("Here are all the films with a title that contains ${searchTerm}:");
// //Should only display Get Out and Winter's Bone (their titles contains a 't');
// matchingFilms.forEach(function(film){
//     console.log(`${film.title}`);
// })
