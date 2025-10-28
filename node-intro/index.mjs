import { shuffle } from 'fast-shuffle';
import express from 'express'
const quotes = (await import("success-motivational-quotes")).default;



let letters = ["a", "b", "c", "d", "e"];


let shuffledLetters = shuffle(letters);


const displayQuote = function(){
    console.log(quotes.getTodaysQuote());
}
displayQuote();
console.log(letters);
console.log(shuffledLetters);