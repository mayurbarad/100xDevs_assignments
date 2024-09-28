import React, { useEffect, useState } from "react";

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for (let i = 0; i < 1000; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(Math.random() * words.length)];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

export function Temp() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  const filteredSentences = sentences.filter((x) => x.includes(filter));

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {filteredSentences.map((word) => (
        <div>{word}</div>
      ))}
    </div>
  );
}
