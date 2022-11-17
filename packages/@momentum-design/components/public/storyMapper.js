/* eslint-disable no-restricted-globals */
import { stories } from '../src/stories.js';

const chooser = document.getElementById('chooser');
const frame = document.getElementById('frame');

stories.forEach((story) => {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = story.label;
  listItem.onclick = () => {
    history.pushState({}, story.label, `/index.html/#${story.id}`);
    frame.src = story.path;
  };
  chooser.appendChild(listItem);
});

// The actual router, get the current URL and generate the corresponding template
const router = () => {
  const url = window.location.hash.slice(1) || '/';
  frame.src = stories.find((story) => url.includes(story.id)).path;
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
