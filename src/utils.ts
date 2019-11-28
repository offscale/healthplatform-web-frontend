export const removeNullProperties = (obj: {[key: string]: any}): typeof obj =>
  Object
    .keys(obj)
    .map(k => (obj[k] == null ? { null: null } : { [k]: obj[k] }))
    .filter(o => !o.hasOwnProperty('null'))
    .reduce((a, b) => Object.assign(a, b), {});


export const removeFalseyProperties = (obj: {[key: string]: any}): typeof obj =>
  Object
    .keys(obj)
    .map(k => (obj[k] == null || !obj[k] ? { null: null } : { [k]: obj[k] }))
    .filter(o => !o.hasOwnProperty('null'))
    .reduce((a, b) => Object.assign(a, b), {});

