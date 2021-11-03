# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @FabianMorgan/lotide`

**Require it:**

`const _ = require('@FabianMorgan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
* `assertArraysEqual`: compares 2 arrays and returns if they are the same
* `assertEqual(array)`: compares 2 values and returns if they are the same
* `countLetters(array)`: returns the number of letters in a string
* `countOnly(array)`: counts number of specific letters defined by user in a string
* `eqArrays(array)`: uesed by assertArraysEqual
* `head(array)`: returns first value in an array
* `middle(array)`: returns middle value of an array, if even numbered array returns 2 values
* `tail(array)`: returns array without index[0]
* `without(array)`: removes values from array