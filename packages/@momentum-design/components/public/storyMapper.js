/* eslint-disable no-restricted-globals */
// eslint-disable-next-line import/no-unresolved
import { stories } from './stories.js';

const chooser = document.getElementById('chooser');
const frame = document.getElementById('frame');

const addStyles = (cssText) => {
  const style = document.createElement('style');
  if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(document.createTextNode(cssText));
  }
  document.getElementsByTagName('head')[0].appendChild(style);
};

const addScripts = (scriptText) => {
  const script = document.createElement('script');

  script.appendChild(document.createTextNode(scriptText));

  document.getElementsByTagName('body')[0].appendChild(script);
};

stories.forEach((story) => {
  if (story.style) {
    addStyles(story.style);
  }

  if (story.script) {
    addScripts(story.script);
  }

  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = story.label;
  listItem.onclick = () => {
    history.pushState({}, story.label, `/${story.id}-${story.details}`);
    frame.innerHTML = story.html;
  };
  chooser.appendChild(listItem);
});

// The actual router, get the current URL and generate the corresponding template
const router = () => {
  const url = window.location.pathname || '/';
  const storyToRender = stories.find((story) => url.includes(story.id) && url.includes(story.details));
  if (storyToRender) {
    frame.innerHTML = storyToRender.html;
  }
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
