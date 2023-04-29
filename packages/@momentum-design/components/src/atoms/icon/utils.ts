const dynamicSVGImport = async (
  name: string,
) => fetch(`https://www.unpkg.com/@momentum-design/icons@0.0.53/dist/svg/${name}.svg`)
  .then((response) => response.text());

export { dynamicSVGImport };
