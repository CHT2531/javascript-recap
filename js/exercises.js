
/*
1. Using these variables and a console.log() statement output the message 'Hi Fred. Your favourite colour is red. Your favourite website is http://www.hud.ac.uk. Make sure you use a template literal.
*/
const username = "Fred";
const colour = "red";
const url="http://www.hud.ac.uk";
console.log(`Hi ${username}. Your favourite colour is ${colour}. Your favourite website is ${url}`)
/*
2. Have a look at the following variables
a) Create a third variable, name it total. total should be assigned a value that is the sum of num1 and num2. Using these variables and a console.log() output the value of total e.g. '10 + 20 = 30'
b) Create another variable, call it average. average should be assigned a value that is the mean average of num1 and $num. Again, use a console.log statement to output the value of average.
*/
const num1=10;
const num2=20;
const total = num1 + num2;
console.log(`${num1} + ${num2} = ${total}`)
const average = (num1 + num2)/2;
console.log(`The mean average of ${num1} and ${num2} is ${average}`)
/*
3. The following code declares an object.
a) Using this object, a template literal, and a console.log(). Write a line of code that outputs 'The film Jaws was released in 1975'.
b) Write an if statement that will test if the film's duration is longer than 2hrs (120 minutes). If it is, a console.log() should simply output 'over 2 hours'.
*/

const filmObj = {
  title:"Jaws",
  year:1975,
  duration:124
}
console.log(`The film ${filmObj.title} was released in ${filmObj.year}.`)
if(filmObj.duration > 120){
  console.log("Over 2 hours");
}

/*
4. The following code declares an array of objects.
a) Using this array, write a line of code that outputs 'The film Jaws was released in 1975' to the console.
b) Add another film to the array. Use a console.log statement to output the details of the new film.
c) Use a forEach loop to output each films details in turn.
d) Use a filter to get all the films made in the 21st century.
*/

const films=[
  {title:"Jaws", year:1975, duration:124},
  {title:"Get Out", year:2017, duration:117},
  {title:"Winter's Bone", year:2010, duration:100},
  {title:"The Incredibles", year:2004, duration:115},
  {title:"Parasite", year:2019, duration:134},
]
//a
console.log(`The film ${films[0].title} was released in ${films[0].year}.`)

//b
console.log(`The film ${films[4].title} was released in ${films[4].year}.`);

//c
films.forEach(function(film){
  console.log(`The film ${film.title} was released in ${film.year}.`)
})

//d
const modernFilms = films.filter(function(film){
  if(film.year>=2000){
    return true;
  }else{
    return false;
  }
})
console.log(modernFilms)

/*
5. Uncomment the following code
a) Make sure you understand what the search() method does. Try changing the value of the searchTerm to get different messages.
b) How could you use the search method in a filter function i.e. it should filter an array of film objects based on whether the film title contains searchTerm. Instead printing a message, the if statement should return true or false, just like the other filter examples.
*/

//a
let searchTerm = "i";
console.log(filmObj.title.search(searchTerm)) //outputs 1, the search term is found at the second character in the string
if(filmObj.title.search(searchTerm)>-1){
  console.log(`The search term '${searchTerm}' was found in ${filmObj.title}`);
}else{
  console.log(`The search term ${searchTerm} was not found in ${filmObj.title}`);
}

//b
const matchingFilms = films.filter(function(film){
  if(film.title.search(searchTerm)>-1){
    return true;
  }else{
    return false;
  }
})
console.log(matchingFilms)

/*
6. Look at the following code that declares a function
a) Write a line of code that will call this function so that the console.log message is displayed
*/

//a
// function printDetails(){
//   console.log(`Jaws was released in 1975. It is 124 minutes long. `)
// }
// printDetails();

/*
7. The following all relate to the function you have just created
a) Modify the function so that you can pass an argument for the title of the film. The function call will then look like the following:

printDetails("Jaws"); //calls the printDetails function passing a single argument.
*/

//7a
// function printDetails(title){
//   console.log(`${title} was released in 1975. It is 124 minutes long. `)
// }
// printDetails("Jaws");

/*
b) Modify the function again so that you can also pass arguments for the year and duration.
*/

//7b
// function printDetails(title, year, duration){
//   console.log(`${title} was released in ${year}. It is ${duration} minutes long. `)
// }
// printDetails("Jaws",1975,124);

/*
c) Instead of passing separate values for title, year and duration, can you pass a film object. The function call will look like the following:

printDetails(filmObj); //calls the printDetails function passing the film object we created earlier (Q3) as an argument.
*/

//7c
// function printDetails(film){
//   console.log(`${film.title} was released in ${film.year}. It is ${film.duration} minutes long. `)
// }
// printDetails(filmObj);

/*
d) Instead of passing a single object can you pass an array of film objects. Again we can use the array we declared earlier as part of Q4.
*/

//7d
// function printDetails(films){
//   films.forEach(function(film){
//     console.log(`${film.title} was released in ${film.year}. It is ${film.duration} minutes long. `);
//   })
// }
// printDetails(films);



/*
Uncomment the following code. This function accepts a single argument, a film object.
The function should test the year property of the object and return true if the film was made in the 21st century and false if it wasn't.
The code beneath will test your function i.e. you should get a message  of 'It's not a 21st century film' (assuming filmObj is the one we declared for Q3.
*/

function is21stCentury(filmObj){
  if(filmObj.year>=2000){
    return true;
  }
  return false;
}

//test for the function
if(is21stCentury(filmObj)){
  console.log("It's a 21st century film.");
}else{
  console.log("It's not a 21st century film.");
}


/*
Have a look at the following code. It calls a function getLongFilms. getLongFilms should accept an array of films. This array of films should be filtered to remove films shorter than 120 minutes in length. The filtered array of films should be returned. If you do this correctly the code that follows will print out the titles of the matching films. Again this assumes we are using the array of films created as part of Q4.
*/

function getLongFilms(films){
  const matchingFilms = films.filter(function(film){
    if(film.duration>=120){
      return true;
    }
    return false;
  })
  return matchingFilms;
}
const longFilms = getLongFilms(films);
console.log("Here are all the films that are longer than 2 hours in length:")
longFilms.forEach(function(film){
    console.log(`${film.title}`);
})



/*
Have a look at the following code. It calls a function searchFilms. A search term and an array of film objects are passed as arguments.  Add code in the searchFilms function that will filter the films using the search term and return an array of matching films. If you do this correctly, the code that follows will print out the matching films details
*/

function searchFilms(searchTerm,films){
  const matchingFilms = films.filter(function(film){
    if(film.title.search(searchTerm)>-1){
      return true;
    }else{
      return false;
    }
  })
  return matchingFilms;
}

searchTerm = "in"
const searchResults = searchFilms(searchTerm,films);
console.log("Here are all the films that match the search term ${searchTerm}:")
searchResults.forEach(function(film){
    console.log(`${film.title}`);
})
