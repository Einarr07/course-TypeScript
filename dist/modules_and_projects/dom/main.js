"use strict";
// querySelector can return the element or null if it does not exist.
const h1 = document.querySelector('h1');
// Optional chaining (?.) avoids an error if h1 is null.
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
// "as HTMLHeadingElement" tells TypeScript this element is specifically an h1/h2/h3/etc.
let title = document.querySelector('.title');
console.log(title === null || title === void 0 ? void 0 : title.textContent);
// The generic <HTMLInputElement> gives access to input-specific properties like placeholder.
const message = document.querySelector('#message');
console.log(message === null || message === void 0 ? void 0 : message.placeholder);
