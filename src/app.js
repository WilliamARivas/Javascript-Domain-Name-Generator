/* eslint-disable */

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (var word in pronoun) {
  for (var wordTwo in adj) {
    for (var wordThree in noun) {
      console.log(pronoun[word] + adj[wordTwo] + noun[wordThree] + ".com");
    }
  }
}
