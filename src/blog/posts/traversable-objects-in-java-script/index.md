# Traversable Objects in JavaScript

JavaScript objects are often used as dictionaries, yet they have no `map`, `filter` or `reduce` like arrays do. Many libraries add helper functions, but most lack the common interface that makes arrays easy to process. This post builds that interface for objects: mapping, filtering and reducing with the same callback signature as arrays.

JavaScript arrays conforms to the [following interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) when it comes to mapping:

> `currentValue` - The current element being processed in the array.
> `index` - The index of the current element being processed in the array.
> `array` - The array map was called upon.

Most of the time only `currentValue` is used, but the `index` argument comes handy in many situations. I believe strongly that the interface should be more generic and allow all the built-in functions to work with objects seamlessly.

## Mapping

In order to map over an object with a function we can break down the object into `key, value` pairs by using `Object.entries` and process them like an array. As the final step, array of pairs must be reduced back to the object.

```javascript
const map = f => object =>
  Object.entries(object)
    .map(([key, value]) => [key, f(value)])
    .reduce(acc, ([key, value]) => ({ ...acc, [key]: value }), {})
```

## Filtering

To filter an object we can compose mapping function and change the reduction or use generic Functor mapping to produce single or no value. By using the `undefined` value as a result of mapping function filtered properties will become `undefined` mimicking standard behavior.

```javascript
const pass = f => value => f(value) ? value : undefined
const filter = map(pass)
```

## Reducing

To filter an object we can compose mapping function and change the reduction or use generic Functor mapping to produce single or no value. By using the `undefined` value as a result of mapping function filtered properties will become `undefined` mimicking standard behavior.

```javascript
const reduce = f => init => object =>
  Object.entries(object)
    .map(([key, value]) => [key, f(value, init)])
    .reduce(acc, ([key, value]) => ({ ...acc, [key]: value }), {})
```

# Post-fix notation

Functional programming in JavaScript unfortunately comes with the burden of tons of braces and unfamiliar prefix notation. In order to allow chaining without composition operators most JavaScript programmers use `.` operator. However, when it comes to extending built-in operators people are left with standard function call notation. There are no Extension Methods like in C# or ability to define own custom infix operators.

# This-less functions

So instead of writing `data.map(f1).filter(f2).reduce(f3)` you are left with horrible `map(f1) ( filter(f2) ( reduce(f3) (data) ) )`. Those issues are exponentially complex as the chain of operations grows.
We can avoid those issues by using ES6 classes:

```javascript
class Traversable {
  static of(value) {
    return new Traversable(value)
  }
  constructor(value) {
    this.value = value
  }

  map(f) {
    return new Traversable(this.value.map(f))
  }

  bind(f) {}

  return() {}
}
```

---

Need a senior engineer for functional TypeScript or a React codebase? [Hire me](/hire-me).
