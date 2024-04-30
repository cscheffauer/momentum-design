import { ColorTokenProps, Dictionary } from "../../../constants";

export function parseData(data: Record<string, string> | null): Dictionary | null {
  if (!data) {
    return null;
  }

  const results: Dictionary = {};

  function traverse(obj: any, path: string[] = []) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        if (obj[key].key === "normal" || obj[key].key === "hover" || obj[key].key === "active") {
          const group = path.join("-");
          const name: string = path.concat(key).join("-");
          const value = obj[key];
          addItem(group, name, value);
        } else {
          traverse(obj[key], path.concat(key));
        }
      } else {
        const group = path.join("-");
        const name = path.concat(key).join("-");
        const value = obj[key];
        addItem(group, name, value);
      }
    }

    function addItem(group: string, name: string, value: any) {
      const tableRowProps: ColorTokenProps = { name, value };
      if (!results[group]) {
        results[group] = [tableRowProps];
      } else {
        results[group].push(tableRowProps);
      }
    }
  }

  traverse(data);

  return results;
}
