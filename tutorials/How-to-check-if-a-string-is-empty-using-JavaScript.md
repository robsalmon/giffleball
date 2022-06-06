---
tags: tutorial
layout: bloglayout.njk
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

### How to check if the string variable is undefined

You can check if a string variable is undefined using JavaScript’s global **[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)** property:

```javascript
var potentialString;
if (typeof potentialString === "undefined") { 
 return 'Undefined value!';
}
```

### How to check if the string variable is null

You can check if the string variable is null using JavaScript’s primitive value **[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)**:

```javascript
var potentialString;
if (potentialString === null) { 
 return 'null value!';
}
```
