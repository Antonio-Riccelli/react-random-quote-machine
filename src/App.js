import React, {useState} from 'react';
import './App.css';
import QuoteBox from './Components/QuoteBox/index';
import Quote from './Components/Quote/index';
import quotes from './Libs/quoteArchive';

function App() {
  const [quote, setQuote] = useState(getQuote());
  console.log(quote)

// FUNCTION THAT GENERATES A RANDOM INTEGER
function generateRandomInteger() {
  const max = quotes.length - 1;
  let randomInteger = Math.floor(Math.random() * (max + 1));
  return randomInteger;
}

// RETRIEVE QUOTE FROM QUOTE ARRAY
function getQuote() {
const randomInteger = generateRandomInteger();
const retrievedQuote = quotes[randomInteger];
return retrievedQuote;
}

function handleClick() {
const randomInteger = generateRandomInteger();
const retrievedQuote = quotes[randomInteger];
setQuote(retrievedQuote);
}

  return (
    <div className="App">
    <h1>Spiritual Wisdom</h1>
    <QuoteBox onClick={() => handleClick()} text={quote.text} author={quote.author} book={quote.book}>
    <Quote text={quote.text} author={quote.author} book={quote.book} />
    </QuoteBox>
    </div>
  );
}

export default App;
