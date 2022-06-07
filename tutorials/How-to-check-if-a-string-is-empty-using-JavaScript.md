---
layout: bloglayout.liquid
tags: tutorial
pageTitle: How to check if a string is empty using JavaScript
intro: For example when you need to check if a user has has entered any text in
  a form field.
---


There are many occasions when you might need to check if a supplied string contains any text. For example when you need to check if a user has entered any text in a form field. Here’s how you can check:

First, let’s me define exactly what I mean by ’empty’. By ’empty’ I mean that the string could:

* be undefined (i.e. the proposed string variable has been defined but not yet set)
* be null (the proposed string has been assigned no value)
* be blank (contains no characters)
* contain only white space.

## How to check if the string variable is undefined

You can check if a string variable is undefined using JavaScript’s global **[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)** property:

```javascript
var potentialString;
if (typeof potentialString === "undefined") { 
 return 'Undefined value!';
}
```

## How to check if the string variable is null

You can check if the string variable is null using JavaScript’s primitive value **[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)**:

```javascript
var potentialString;
if (potentialString === null) { 
 return 'null value!';
}
```

## How to check if the string variable is blank

You can check is a string is blank by either 1. comparing to a empty string literal or 2. checking that the string’s length:

```javascript
var blankString = '';
 
// 1. Checking by comparing to an empty string literal
if (blankString === '') { 
 return 'empty string!';
}
 
// 2. Checking that string length is zero
if (blankString.length === 0) {
return 'string length is zero';
}
```

Both effectively check if the length of the string is zero.

## Combining checks for undefined, null and blank strings

You can combine all the aforementioned checks as follows: