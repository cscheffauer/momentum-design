/* eslint-disable implicit-arrow-linebreak */

// TODO: use URL.parse( for the fetch
const dynamicSVGImport = async (url: string, name: string, fileExtension: string): Promise<HTMLCollection> =>
  fetch(`${url}/${name}.${fileExtension}`)
    .then((response) => response.text())
    .then((iconResponse) => new DOMParser().parseFromString(iconResponse, 'text/html').body.children);

export { dynamicSVGImport };
