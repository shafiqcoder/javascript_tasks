//In this code i have done scrapping of top 250 movies in imdb list by JS.
//I searched for the class html of movies name by right click on the name of a movie.
// I console log i used following code to iterate over all movies.
// Imported all data in excel file.

// console.log;

var names = document.getElementsByClassName("titleColumn")

for (i = 0; i < names.length; i++) {
    console.log(names[i].innerText); /*this returns list of movies*/
}