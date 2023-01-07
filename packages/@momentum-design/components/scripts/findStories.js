import glob from 'glob';
import fs from 'fs-extra';
import { parse } from 'node-html-parser';
import path from 'path';
import { cwd } from 'process';

const readFile = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      reject(error);
    } else {
      // return file object with the retrieved data:
      resolve({ path: filePath, data });
    }
  });
});

const readFiles = (filePaths) => Promise.all(filePaths.map((filePath) => readFile(filePath)));

const writeStoriesToFile = async (stories) => {
  const storyFilePath = path.resolve(cwd(), 'dist/stories.js');
  await fs.writeFile(storyFilePath, `export const stories = ${JSON.stringify(stories)}`);
};

glob('**/story.html', {}, async (er, files) => {
  const filesWithData = await readFiles(files);
  const stories = [];
  filesWithData.forEach((fileWithData) => {
    const root = parse(fileWithData.data);
    const title = root.querySelector('title').innerHTML;
    const bodyContent = root.querySelector('body').innerHTML;
    if (title.length && bodyContent.length) {
      stories.push({
        id: title.toLowerCase(),
        label: title,
        html: bodyContent,
      });
    }
  });

  await writeStoriesToFile(stories);
});
