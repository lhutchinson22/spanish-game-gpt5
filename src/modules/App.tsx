import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "../state/gameStore";
import { Flashcards } from "./flashcards/Flashcards";
import { Matching } from "./matching/Matching";
import { Spelling } from "./spelling/Spelling";
import { StreakBar } from "./common/StreakBar";
import { FilterBar } from "./common/FilterBar";
import { GameMenu } from "./menu/GameMenu";
import "./app.css";

export const App: React.FC = () => {
  const currentGame = useGameStore((s) => s.currentGame);

  return (
    <div className="app-root">
      <h1>Spanish Fun 🎉</h1>
      <StreakBar />
      <FilterBar />
      <GameMenu />
      <AnimatePresence mode="wait">
        {currentGame === "flashcards" && (
          <motion.div
            key="flash"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Flashcards />
          </motion.div>
        )}
        {currentGame === "matching" && (
          <motion.div
            key="match"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Matching />
          </motion.div>
        )}
        {currentGame === "spelling" && (
          <motion.div
            key="spell"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Spelling />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
