/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { ACTIONS } from '../shared/action-constants';

import Document from './models/document';
import Storage from './models/storage';

const storage = new Storage();

figma.on('run', async () => {
  const settings = await storage.getSettings();
  if (!settings) {
    await storage.setSettings(storage.initialSettings);
  }
});

figma.skipInvisibleInstanceChildren = true;
figma.showUI(__html__, { themeColors: true, height: 430, width: 430 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  // used to distinguish between different post message types, sent from UI:
  if (msg.type === ACTIONS.EXPORT) {
    const document = new Document(figma.root, msg.settings);

    const assets = await document.getAssetsFromPages();
    console.log(assets);
    figma.notify('Exported successfully!');
  }

  if (msg.type === ACTIONS.SET_SETTINGS) {
    await storage.setSettings(msg.settings);
  }

  if (msg.type === ACTIONS.GET_SETTINGS) {
    // get settings from local storage
    const settings = await storage.getSettings();
    // sending settings from storage back to UI:
    figma.ui.postMessage(settings, { origin: '*' });
  }

  if (msg.type === ACTIONS.RESTORE_SETTINGS) {
    await storage.setSettings(storage.initialSettings);

    // sending settings from storage back to UI:
    figma.ui.postMessage(storage.initialSettings, { origin: '*' });
  }
};
