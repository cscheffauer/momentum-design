export const register = (name: string, element: any) => {
  if (customElements.get(name)) {
    return;
  }

  customElements.define(name, element);
};
