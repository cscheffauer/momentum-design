/* eslint-disable implicit-arrow-linebreak */

const dynamicSVGImport = async (url: string, name: string, fileExtension: string): Promise<Element> =>
  fetch(`${url}/${name}.${fileExtension}`)
    .then((response) => response.text())
    .then((iconResponse) => new DOMParser().parseFromString(iconResponse, 'text/html').body.children[0]);

export { dynamicSVGImport };
