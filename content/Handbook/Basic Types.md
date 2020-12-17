---
title: 'Basic Types'
metaTitle: 'Basic Types'
metaDescription: 'Basic Types'
---

<!-- todo -->

## Basic Types

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

### Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a `boolean` value.

```ts
let isDone: boolean = false;
```

### Number

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```
