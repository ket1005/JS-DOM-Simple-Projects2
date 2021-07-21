/*
2) Display Famous People Quotes:
- create a HTML file that will contain a button that on click will display the Name of the Author and the Famous Quote
- each time the button is clicked a new Author/Quote should be displayed randomly
- the list of the author and their quotes should be predefined in your JS file as an array of OBJECTS
*/
let quotes = [{
    "The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity."
    Mark Twain

},
{
    "If you do not think about the future, you cannot have one."
     Galsworthy
},
{
    "The great aim of education is not knowledge but action."
    Herbert Spence
},
{
    "If you do not think about the future, you cannot have one."
    Galsworthy
}];

document.getElementById("next").addEventListener("click", function() {
   
    // выбираем случайную фразу из массива
    // данные в массив могут попадать и через api
    let quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    // цитата
    let phrase = document.querySelector("#phrase");
   
    // автор
    let author = document.querySelector("#author");

    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1];  
});