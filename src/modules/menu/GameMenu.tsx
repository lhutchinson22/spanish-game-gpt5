import React from "react";
import { useGameStore, GameKey } from "../../state/gameStore";

const games: { key: GameKey; label: string; desc: string }[] = [
  { key: "flashcards", label: "Flashcards", desc: "Learn vocab quickly" },
  { key: "matching", label: "Matching", desc: "Pair Spanish & English" },
  { key: "spelling", label: "Spelling", desc: "Type what you hear" },
];

export const GameMenu: React.FC = () => {
  const { currentGame, setGame } = useGameStore((s) => ({
    currentGame: s.currentGame,
    setGame: s.setGame,
  }));
  return (
    <div
      style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}
    >
      {games.map((g) => (
        <button
          key={g.key}
          onClick={() => setGame(g.key === currentGame ? null : g.key)}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: "1px solid #999",
            background: g.key === currentGame ? "#ffd54f" : "#fff",
          }}
        >
          <strong>{g.label}</strong>
          <br />
          <small>{g.desc}</small>
        </button>
      ))}
    </div>
  );
};
