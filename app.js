function findCommaIndex(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ',') {
            return i;
        }
    }
}

let text = "Hello, world";
let index = findCommaIndex(text);

console.log("Index of ',':", index);
