console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
    let sum = 0;
    numbers.forEach((num) => {
            sum += num;
        })
        return sum;
    }
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
    title: "Ready Player One",
    pages:  374,
    readCount: 1,
}

book.info = `${book.title}, ${book.pages} pages, read ${book.readCount} times.`

console.log(book.info);
