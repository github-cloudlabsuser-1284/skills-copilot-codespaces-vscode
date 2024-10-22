function reverseSentence(sentence) {
    if (!sentence) return '';

    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

// Example usage:
const inputSentence = "hello world this is a test";
const outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"