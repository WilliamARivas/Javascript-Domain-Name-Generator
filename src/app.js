/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  for (var word in pronoun) {
    for (var wordTwo in adj) {
      for (var wordThree in noun) {
        console.log(pronoun[word] + adj[wordTwo] + noun[wordThree]);
      }
    }
  }
};
