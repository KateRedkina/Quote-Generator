//FROM API file
// let apiQuotes = [];

//Show new Quote
// function newQuote() {
//     //Pick a random quote from API Quotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     console.log(quote);
// }

// Get Quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         //console.log(apiQuotes[12]);
//         newQuote();
//     } catch (error) {
//         //Catch Error Here
//     }
// }

//On Load
// getQuotes();

//FROM LOCAL by using quotes.js file
function newQuote() {
   //Pick a random quote from API Quotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
     console.log(quote);
}

//On Load
newQuote();