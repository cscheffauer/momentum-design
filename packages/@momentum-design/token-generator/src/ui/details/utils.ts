export const parseGradient = (gradient: string) => {
  const foundColors = gradient.split('#');

  return {
    start: `#${foundColors[1].split(' ')[0]}`,
    end: `#${foundColors[2].split(' ')[0]}`,
  };
};
