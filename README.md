# This is version of DIFF TOOL created using React and TypeScript

https://mihhei.github.io/diff-tool/


## Task

Create a diff tool for text using JavaScript, HTML, and CSS. Tool is a web page with three text areas: first text area contains the original text and the second one contains the modified text. When user clicks "Diff" button, it will calculate word-level diff i.e. text difference using whole words, and show it in the bottom of page in a third text area. Text is analysed one sentence at a time, and dot, question mark, and exclamation mark characters are only used at the end of a sentence. The diff is computed for each sentence independently.

## Example:

Original text (upper text area): This is a hard coding exercise. Is it?

Modified text (lower text area): This is not a coding exorcist. True!

Example diff (middle text, ++/--prefix+color-coded diff): 1. This is ++not a --hard coding --exercise. ++exorcist. 2. --Is --it? ++True!