export const transformToOldData = (newData) => {
  const transform = (obj) => {
    if (typeof obj === "object" && obj !== null) {
      if (obj.data) {
        let { data, ...rest } = obj;
        return { ...transform(data), ...transform(rest) };
      } else if (obj.attributes) {
        let { attributes, ...rest } = obj;
        return { ...transform(attributes), ...transform(rest) };
      } else {
        let newObj = {};
        for (let key in obj) {
          newObj[key] = transform(obj[key]);
        }
        return newObj;
      }
    } else {
      return obj;
    }
  };
  const convertNestedObjArrays = (obj) => {
    if (!obj || typeof obj !== "object") return obj;
    const values = Object.entries(obj)
      .map(([k, v]) => (k === "__typename" ? null : v))
      .filter((v) => v !== null);
    const keys = Object.keys(obj);
    if (keys.every((k, i) => k === "__typename" || k === i.toString()))
      return values.map(convertNestedObjArrays);
    else
      return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, convertNestedObjArrays(v)])
      );
  };
  return convertNestedObjArrays(transform(newData));
};
