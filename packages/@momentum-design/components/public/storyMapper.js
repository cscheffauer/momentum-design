/* eslint-disable no-restricted-globals */
// eslint-disable-next-line import/no-unresolved
import { stories } from './stories.js';

const chooser = document.getElementById('chooser');
const frame = document.getElementById('frame');

stories.forEach((story) => {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = story.label;
  listItem.onclick = () => {
    history.pushState({}, story.label, `/${story.id}`);
    frame.innerHTML = story.html;
  };
  chooser.appendChild(listItem);
});

// The actual router, get the current URL and generate the corresponding template
const router = () => {
  const url = window.location.pathname || '/';
  frame.innerHTML = stories.find((story) => url.includes(story.id)).html;
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
