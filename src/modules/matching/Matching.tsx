import React, { useState } from "react";
import { filterWords } from "../../data/words";
import { shuffle } from "../../utils/shuffle";
import { useGameStore } from "../../state/gameStore";
import { speak } from "../../utils/speak";

interface Pair {
  id: number;
  es: string;
  en: string;
}

export const Matching: React.FC = () => {
  const { incrementStreak, levels, topics } = useGameStore((s) => ({
    incrementStreak: s.incrementStreak,
    levels: s.levels,
    topics: s.topics,
  }));
  const filtered = filterWords(levels, topics).slice(0, 8);
  const base = filtered.map((w, i) => ({ id: i, es: w.es, en: w.en }));
  const [left, setLeft] = useState<Pair[]>(() => shuffle(base));
  const [right, setRight] = useState<Pair[]>(() => shuffle(base));
  const [selected, setSelected] = useState<{
    side: "left" | "right";
    id: number;
  } | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set());

  const handleClick = (side: "left" | "right", id: number) => {
    if (matchedIds.has(id)) return;
    if (!selected) {
      setSelected({ side, id });
      return;
    }
    if (selected.side !== side) {
      if (selected.id === id) {
        setMatchedIds((s) => new Set([...s, id]));
        incrementStreak();
      }
      setSelected(null);
    } else {
      setSelected({ side, id });
    }
  };

  const done = matchedIds.size === base.length;

  return (
    <div style={{ display: "flex", gap: 32 }}>
      {[left, right].map((col, ci) => (
        <div
          key={ci}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {col.map((p) => {
            const isSel =
              selected &&
              selected.side === (ci === 0 ? "left" : "right") &&
              selected.id === p.id;
            const isMatched = matchedIds.has(p.id);
            return (
              <button
                key={p.id}
                disabled={isMatched}
                onClick={() => handleClick(ci === 0 ? "left" : "right", p.id)}
                style={{
                  padding: "8px 10px",
                  borderRadius: 8,
                  background: isMatched
                    ? "#c8e6c9"
                    : isSel
                    ? "#bbdefb"
                    : "#fff",
                  border: "1px solid #888",
                  minWidth: 120,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {ci === 0 ? p.es : p.en}
                  {ci === 0 && (
                    <span style={{ fontSize: 12 }}>
                      <button
                        type="button"
                        style={{ padding: "2px 4px" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(p.es);
                        }}
                      >
                        🔊
                      </button>
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      ))}
      {done && (
        <div style={{ alignSelf: "center", fontSize: 24 }}>✅ Great job!</div>
      )}
    </div>
  );
};
