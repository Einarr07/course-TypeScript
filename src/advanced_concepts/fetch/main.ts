// ==========================================
// Using the Fetch API with TypeScript
// ==========================================
// The Fetch API lets you make HTTP requests (like GET, POST, etc.) to external APIs.
// Combined with async/await, it makes asynchronous code easy to read and write.

/**
 * Async function that fetches JSON data from an external API.
 * - 'async' marks the function as asynchronous (it returns a Promise).
 * - 'await' pauses execution until the Promise resolves, avoiding callback hell.
 */
const fetchData = async () => {
    const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'

    // fetch() returns a Promise that resolves to a Response object
    const response = await fetch(API_URL);

    // .json() parses the response body as JSON (also returns a Promise)
    return await response.json();
}

// ==========================================
// DOM Manipulation with Type Assertions
// ==========================================
// document.querySelector() returns 'Element | null' by default.
// We use 'as <Type>' (type assertion) to tell TypeScript the exact HTML element type,
// so we can access element-specific properties like .innerHTML without errors.

let button: HTMLHeadingElement = document.querySelector('.btnInfo') as HTMLHeadingElement;
let paragraph: HTMLParagraphElement = document.querySelector('.info') as HTMLParagraphElement;

// ==========================================
// Event Listener with Async Callback
// ==========================================
// We attach a 'click' event to the button. The callback is 'async'
// because we need to 'await' the fetchData() call inside it.
button.addEventListener('click', async () => {
    const data = await fetchData();

    // JSON.stringify() converts the JavaScript object into a readable string
    paragraph.innerHTML = JSON.stringify(data);
})