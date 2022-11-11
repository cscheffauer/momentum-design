/* eslint-disable no-restricted-globals */
import { stories } from '../src/stories.js';

const components = document.getElementById('components');
const frame = document.getElementById('frame');

stories.forEach((story) => {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = story.label;
  listItem.onclick = () => {
    history.pushState({}, story.label, `/dev/#${story.id}`);
    frame.src = story.path;
  };
  components.appendChild(listItem);
});

// The actual router, get the current URL and generate the corresponding template
const router = () => {
  const url = window.location.hash.slice(1) || '/';
  if (!frame.src.includes(url)) {
    frame.src = stories.find((story) => story.id === url)?.path;
  } else {
    frame.src = '/dev/introduction.html';
  }
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
