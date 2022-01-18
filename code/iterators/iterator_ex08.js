/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
***/
// a plain object
const collection = {
  a: 10,
  b: 20,
  c: 30
};

for (let value of collection) {  // ⇒ TypeError: collection is not iterable
  console.log(value);
}