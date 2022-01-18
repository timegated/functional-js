/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
***/
const postIds = ['1', '2', '3', '4'];

const promises = postIds.map(async (id) => {
  return await getPost(id);
});

const arr = Promise.all(promises);