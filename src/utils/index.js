export const partition = predicate => xs =>
  Object.entries(xs).reduce((acc, [key, value]) => [
    Object.assign(acc[0], predicate(value) ? ({ [key]: value }) : ({})),
    Object.assign(acc[1], !predicate(value) ? ({ [key]: value }) : ({}))
  ], [{}, {}])

export const toObject = (acc, [key, value]) =>
  ({ ...acc, [key]: value })

export const filter = predicate => xs =>
  Object.entries(xs)
    .filter(keyValuePair => predicate(keyValuePair[1]))
    .reduce(toObject, {})
