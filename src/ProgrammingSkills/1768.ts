/*
1768. Merge Strings Alternately

You are given two strings word1 and word2.
Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

function mergeAlternately(word1: string, word2: string): string {
  let minWord: string;
  let maxWord: string;
  if (word1.length === word2.length) {
    [minWord, maxWord] = [word1, word2]
  } else {
    const minLenght = Math.min(word1.length, word2.length);
    [minWord, maxWord] = word1.length == minLenght ? [word1, word2] : [word2, word1];
  }

  let resWord = "";
  for (let i = 0; i < minWord.length; i++) {
    resWord += word1[i] + word2[i];
  }

  resWord += maxWord.slice(minWord.length, maxWord.length)

  return resWord;
}

const word1 = "abc";
const word2 = "pqrpfrfs";
const res = mergeAlternately(word1, word2);
console.log(res);
