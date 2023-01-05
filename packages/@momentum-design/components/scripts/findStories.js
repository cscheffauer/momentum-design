import glob from 'glob';

glob('**/story.html', {}, (er, files) => {
  console.log(files);
});
