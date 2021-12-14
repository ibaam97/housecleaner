const addDefinedPropsToObject = (object: {}) => {
  return Object.keys(object).reduce((acc, curr) => {
    const currVal: any = object[curr];
    if (currVal) return { ...acc, [curr]: currVal };
    return acc;
  }, {});
};

export default addDefinedPropsToObject;
