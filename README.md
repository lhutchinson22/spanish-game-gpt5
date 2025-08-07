# Spanish Fun!

Playful React + Vite app to practice Spanish vocabulary via mini-games (now with level & topic filters and pronunciation):

- Flashcards: tap to reveal Spanish → English (audio + filters).
- Matching: pair Spanish and English words (audio on Spanish side).
- Spelling: type the Spanish word from the English prompt (audio + hint).

Features:

- CEFR-ish levels A1–C1 & thematic topics (select multiple)
- Pronunciation via Web Speech API (🔊 buttons)
- Hint system (first letter) in spelling game
- Streak counter encourages consistency (persisted)

## Development

Install dependencies and start dev server.

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Future Ideas

- Audio pronunciation (text-to-speech for Spanish prompt)
- Adaptive spaced repetition (SM-2)
- Progress dashboard & XP levels
- Theming & dark mode
- More game types (sentence scramble, verb conjugation)

## License

MIT
