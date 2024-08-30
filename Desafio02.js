function countLetterA(str) {
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' ocorre ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não ocorre na string.");
    }
}

countLetterA("JavaScript é uma linguagem fantástica!");
