import React from "react";
import { useGameStore } from "../../state/gameStore";
import { allLevels, allTopics, Level } from "../../data/words";

export const FilterBar: React.FC = () => {
  const { levels, topics, setLevels, setTopics, clearFilters } = useGameStore(
    (s) => ({
      levels: s.levels,
      topics: s.topics,
      setLevels: s.setLevels,
      setTopics: s.setTopics,
      clearFilters: s.clearFilters,
    })
  );

  const toggleLevel = (l: Level) => {
    setLevels(
      levels.includes(l) ? levels.filter((x) => x !== l) : [...levels, l]
    );
  };
  const toggleTopic = (t: string) => {
    setTopics(
      topics.includes(t) ? topics.filter((x) => x !== t) : [...topics, t]
    );
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <strong>Levels:</strong>
        {allLevels.map((l) => (
          <button
            key={l}
            onClick={() => toggleLevel(l)}
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: levels.includes(l) ? "#1976d2" : "#fff",
              color: levels.includes(l) ? "#fff" : "#000",
            }}
          >
            {l}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <strong>Topics:</strong>
        {allTopics.slice(0, 10).map((t) => (
          <button
            key={t}
            onClick={() => toggleTopic(t)}
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: topics.includes(t) ? "#7b1fa2" : "#fff",
              color: topics.includes(t) ? "#fff" : "#000",
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={clearFilters}
        style={{ marginLeft: "auto", padding: "4px 10px" }}
      >
        Reset
      </button>
    </div>
  );
};
