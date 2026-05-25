// querySelector can return the element or null if it does not exist.
const h1 = document.querySelector('h1');

// Optional chaining (?.) avoids an error if h1 is null.
console.log(h1?.textContent);

// "as HTMLHeadingElement" tells TypeScript this element is specifically an h1/h2/h3/etc.
let title: HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(title?.textContent);

// The generic <HTMLInputElement> gives access to input-specific properties like placeholder.
const message = document.querySelector<HTMLInputElement>('#message');
console.log(message?.placeholder);
