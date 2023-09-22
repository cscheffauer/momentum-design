import { FontType } from "./text.types";

const getTypeParts = (type: FontType) => {
  const parts = type.split("-");
  return { firstPart: parts[0], secondPart: parts[1] };
};
const isHeading = (type: FontType) => {
  const { firstPart, secondPart } = getTypeParts(type);
  return firstPart === "heading" && +secondPart > 0 && +secondPart < 7;
};

const getRole = (type?: FontType) => {
  if (type) {
    if (isHeading(type)) {
      return "heading";
    }
    return "paragraph";
  }
  return null;
};

const getAriaLevel = (type?: FontType) => {
  if (type) {
    if (isHeading(type)) {
      const { secondPart } = getTypeParts(type);
      return secondPart;
    }
  }
  return null;
};

export { isHeading, getAriaLevel, getRole };
