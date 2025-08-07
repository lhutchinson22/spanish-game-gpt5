import React, { useState } from "react";
import { filterWords } from "../../data/words";
import { useGameStore } from "../../state/gameStore";
import { speak } from "../../utils/speak";

export const Flashcards: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const { incrementStreak, levels, topics } = useGameStore((s) => ({
    incrementStreak: s.incrementStreak,
    levels: s.levels,
    topics: s.topics,
  }));
  const words = filterWords(levels, topics);
  const word = words[index % words.length];

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 12,
        maxWidth: 360,
      }}
    >
      <div
        style={{ fontSize: 24, minHeight: 40, cursor: "pointer" }}
        onClick={() => setShow((s) => !s)}
      >
        {show ? word.es : "Tap to reveal"}
      </div>
      {show && <div style={{ marginTop: 8, color: "#555" }}>{word.en}</div>}
      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button onClick={() => speak(word.es)}>🔊 Pronounce</button>
        <button
          onClick={() => {
            setShow(false);
            setIndex((i) => i + 1);
            incrementStreak();
          }}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};
