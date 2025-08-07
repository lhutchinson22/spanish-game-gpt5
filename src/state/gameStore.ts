import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Level } from "../data/words";

export type GameKey = "flashcards" | "matching" | "spelling";

interface GameState {
  currentGame: GameKey | null;
  streak: number;
  levels: Level[]; // selected levels filter
  topics: string[]; // selected topics filter
  setGame: (g: GameKey | null) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  setLevels: (l: Level[]) => void;
  setTopics: (t: string[]) => void;
  clearFilters: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      currentGame: null,
      streak: 0,
      levels: [],
      topics: [],
      setGame: (g) => set({ currentGame: g }),
      incrementStreak: () => set((s) => ({ streak: s.streak + 1 })),
      resetStreak: () => set({ streak: 0 }),
      setLevels: (l) => set({ levels: l }),
      setTopics: (t) => set({ topics: t }),
      clearFilters: () => set({ levels: [], topics: [] }),
    }),
    { name: "game-state" }
  )
);
