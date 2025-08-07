import React, { useState } from "react";
import { filterWords } from "../../data/words";
import { useGameStore } from "../../state/gameStore";
import { speak } from "../../utils/speak";

export const Spelling: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const { incrementStreak, resetStreak, levels, topics } = useGameStore(
    (s) => ({
      incrementStreak: s.incrementStreak,
      resetStreak: s.resetStreak,
      levels: s.levels,
      topics: s.topics,
    })
  );
  const words = filterWords(levels, topics);
  const word = words[idx % words.length];

  const check = () => {
    if (input.trim().toLowerCase() === word.es.toLowerCase()) {
      setFeedback("✅ Correct");
      incrementStreak();
      setTimeout(() => {
        setIdx((i) => i + 1);
        setInput("");
        setFeedback(null);
      }, 700);
    } else {
      setFeedback("❌ Try again");
      resetStreak();
    }
  };

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
        style={{
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span>
          Translate: <strong>{word.en}</strong>
        </span>
        <button type="button" onClick={() => speak(word.es)}>
          🔊
        </button>
        <button
          type="button"
          onClick={() => setFeedback(`Hint: ${word.es[0]}...`)}
        >
          💡
        </button>
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type Spanish"
        style={{ padding: 8, width: "100%", boxSizing: "border-box" }}
      />
      <button onClick={check} style={{ marginTop: 10 }}>
        Check ✅
      </button>
      {feedback && <div style={{ marginTop: 8 }}>{feedback}</div>}
    </div>
  );
};
