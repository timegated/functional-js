import { animator } from './animator.mjs';
import { AsyncQueue } from './asyncQueue.mjs';


const animationData = [
  {
    x: 10,
    y: 20,
    zoom: 1200,
    rotation: 0.25,
    tilt: 5,
    duration: 1000,
    pause: 0,
    easing: 'linear',
  },
  {
    x: 15,
    y: 30,
    zoom: 1200,
    rotation: 0.25,
    tilt: 5,
    duration: 1000,
    pause: 0,
    easing: 'linear',
  },
  {
    x: 25,
    y: 40,
    zoom: 1200,
    rotation: 0.25,
    tilt: 5,
    duration: 1000,
    pause: 0,
    easing: 'linear',
  },
];

/**
 * Something like this where we iterate through the array and use
 * the values present in each object to drive the animation.
 * Has to be sequential 0 -> 1 -> 2 -> ...however many keyframes are present
 */
function animationStream() {
  const q = new AsyncQueue();
  q.enqueue(animator(animationData));
  return q;
};

async function handleAnimationStream() {
  for await (const animation of animationStream()) {
    console.log(animation);
  }
};

handleAnimationStream();

function eventStream(elt, type) {
  const q = new AsyncQueue();
  elt.addEventListener(type, e => q.enqueue(e));
  return q;
};

async function handleKeys() {
  for await (const event of eventStream(document, 'keypress')) {
    console.log(event);
  };
};