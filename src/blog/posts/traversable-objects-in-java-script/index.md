# Traversable Objects in JavaScript

Objects in JavaScript are commonly used as dictionary data structure and by that there is strong need to process them in the functional way. However, there are no easy way to `map`, `filter` and `reduce` them like arrays. Therefore many great libraries come with many helper functions, but most of them lack common interface with ease of processing arrays.

JavaScript arrays comforms to the [following interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) when it comes to mapping:

> `currentValue` - The current element being processed in the array.  
> `index` - The index of the current element being processed in the array.  
> `array` - The array map was called upon.

Most of the time only `currentValue` is used, but the `index` argument comes handy in many situations. I belive strongly that the interace should be more generic and allow all the built-in functions to work with objects seamlessly.

## Mapping
In order to map over an object with a function we can break down the object into `key, value` pairs by using `Object.entries` and process them like an array. As the final step, array of pairs must be reduced back to the object.

    const map = f => object =>
        Object.entries(object)
        .map(([key, value]) => [key, f(value)])
        .reduce(acc, ([key, value]) => ({...acc, [key]: value}), {})

## Filtering
To filter and object we can compose mapping function and change the reduction or use generic Functor mapping to produce single or no value. By using the `undefined` value as a result of mapping function filtered properies will become `undefined` mimicing standard behavior.

    const pass = f => value => f(value) ? value : undefined
    const filter = map (pass)

## Reducing
To filter and object we can compose mapping function and change the reduction or use generic Functor mapping to produce single or no value. By using the `undefined` value as a result of mapping function filtered properies will become `undefined` mimicing standard behavior.

    const reduce = f => init => object =>
        Object.entries(object)
        .map(([key, value]) => [key, f(value, init)])
        .reduce(acc, ([key, value]) => ({...acc, [key]: value}), {})

# Post-fix notation
Functional programming in JavaScript unfortunately comes with the burden of tons of braces and unfamiliar prefix notation. In order to allow chaining without composition operators most JavaScript programmers use `.` operator. However, when it comes to extending built-in operators people are left with standard function call notation. There are no Extension Methods like in C# or ability to define own custom infix operators.

# This-less functions
So instead of writing `data.map(f1).filter(f2).reduce(f3)` you are left with horrible `map(f1) ( filter(f2) ( reduce(f3) (data) ) )`. Those issues are exponentially complex as the chain of operations grows.
We can avoid those issues by using ES6 classes:

    class Traversable {
        static of(value) {
            return new Traversable(value)
        }
        constructor(value) {
            this.value = value
        }
        
        map(f) {
            return new Traversable(
                this.value.map(f)
            )
        }
        
        bind(f) {
        }
        
        return() {
        }
    }

# Monads
# Implementations
