const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete(){    
    quoteContainer.hidden = false;
    loader.hidden = true;
}

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
    loading();
   //Pick a random quote from API Quotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //console.log(quote);
    //authorText.textContent = quote.author;
    //quoteText.textContent = quote.text;

    //Check if Author field is blank and replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }

    //Check Quote length to determine styling
    if(quote.text.length > 30){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.remove('long-quote') 
    }
    //Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText
    .textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);

//On Load
newQuote();

//loading();