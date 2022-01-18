/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
***/
const promise = Promise.resolve(10);

promise.then((result) => {
  throw new Error();
}).catch((error) => {
  console.error('An error occurred in the fulfillment handler'); 
});

// logs:
// ⇒ An error occurred in the fulfillment handler