/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
***/
const promises = [
  Promise.reject(new Error('failure #1')),
  Promise.reject(new Error('failure #2')),
  Promise.reject(new Error('failure #3'))
];

Promise.any(promises).then(
  (result) => {console.log(result)},
  (error) => {console.error(error.errors)}
);
// END_HIGHLIGHT