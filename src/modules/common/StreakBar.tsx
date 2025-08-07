import React from "react";
import { useGameStore } from "../../state/gameStore";

export const StreakBar: React.FC = () => {
  const streak = useGameStore((s) => s.streak);
  return (
    <div style={{ marginBottom: 12 }}>
      🔥 Streak: <strong>{streak}</strong>
    </div>
  );
};
