/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
***/
const promises = [
  fetch('https://picsum.photos/200', {mode: "no-cors"}),
  fetch('https://does-not-exist', {mode: "no-cors"}),
  fetch('https://picsum.photos/100/200', {mode: "no-cors"})
].map(p => p.catch(e => e)); 

Promise.all(promises).
  then((results) => results.forEach((result) => console.log(result)));
