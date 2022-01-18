/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
***/
const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.iterator]() {
    let i = 0;
    const values = Object.keys(this);
    return {
      next: () => {
        return {
          value: this[values[i++]],
          done: i > values.length
        }
      }
    };
  }
};

const iterator = collection[Symbol.iterator]();
  
console.log(iterator.next());  // ⇒ {value: 10, done: false}
console.log(iterator.next());  // ⇒ {value: 20, done: false}
console.log(iterator.next());  // ⇒ {value: 30, done: false}
console.log(iterator.next());  // ⇒ {value: undefined, done: true}