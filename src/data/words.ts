export type Level = "A1" | "A2" | "B1" | "B2" | "C1";

export interface Word {
  es: string;
  en: string;
  level: Level; // CEFR-ish rough level
  topic: string; // thematic grouping
}

export const words: Word[] = [
  // A1 essentials
  { es: "hola", en: "hello", level: "A1", topic: "greetings" },
  { es: "adiós", en: "goodbye", level: "A1", topic: "greetings" },
  { es: "por favor", en: "please", level: "A1", topic: "politeness" },
  { es: "gracias", en: "thank you", level: "A1", topic: "politeness" },
  { es: "agua", en: "water", level: "A1", topic: "food" },
  { es: "comida", en: "food", level: "A1", topic: "food" },
  { es: "casa", en: "house", level: "A1", topic: "home" },
  { es: "perro", en: "dog", level: "A1", topic: "animals" },
  { es: "gato", en: "cat", level: "A1", topic: "animals" },
  { es: "libro", en: "book", level: "A1", topic: "objects" },
  // A2
  { es: "desayuno", en: "breakfast", level: "A2", topic: "food" },
  { es: "ciudad", en: "city", level: "A2", topic: "places" },
  { es: "montaña", en: "mountain", level: "A2", topic: "nature" },
  { es: "trabajo", en: "job / work", level: "A2", topic: "work" },
  { es: "familia", en: "family", level: "A2", topic: "people" },
  { es: "amigo", en: "friend", level: "A2", topic: "people" },
  { es: "cansado", en: "tired", level: "A2", topic: "adjectives" },
  { es: "rápido", en: "fast", level: "A2", topic: "adjectives" },
  // B1
  { es: "desarrollar", en: "to develop", level: "B1", topic: "work" },
  { es: "mejorar", en: "to improve", level: "B1", topic: "verbs" },
  { es: "lograr", en: "to achieve", level: "B1", topic: "verbs" },
  { es: "equipo", en: "team", level: "B1", topic: "work" },
  { es: "riesgo", en: "risk", level: "B1", topic: "business" },
  { es: "capacidad", en: "ability", level: "B1", topic: "abstract" },
  { es: "detallar", en: "to detail", level: "B1", topic: "work" },
  // B2
  { es: "sostenible", en: "sustainable", level: "B2", topic: "environment" },
  { es: "aprovechar", en: "to take advantage of", level: "B2", topic: "verbs" },
  { es: "alcanzar", en: "to reach", level: "B2", topic: "verbs" },
  { es: "retos", en: "challenges", level: "B2", topic: "abstract" },
  { es: "liderazgo", en: "leadership", level: "B2", topic: "business" },
  { es: "rentable", en: "profitable", level: "B2", topic: "business" },
  { es: "escasez", en: "scarcity", level: "B2", topic: "economy" },
  // C1
  { es: "paradigma", en: "paradigm", level: "C1", topic: "abstract" },
  { es: "viabilidad", en: "viability", level: "C1", topic: "business" },
  { es: "transcender", en: "to transcend", level: "C1", topic: "abstract" },
  { es: "perspectiva", en: "perspective", level: "C1", topic: "abstract" },
  { es: "gestión", en: "management", level: "C1", topic: "business" },
  { es: "innovador", en: "innovative", level: "C1", topic: "business" },
];

export const allTopics = Array.from(new Set(words.map((w) => w.topic))).sort();
export const allLevels: Level[] = ["A1", "A2", "B1", "B2", "C1"];

export function filterWords(levels: Level[], topics: string[]): Word[] {
  const levelSet = new Set(levels);
  const topicSet = new Set(topics);
  const filtered = words.filter(
    (w) =>
      (levelSet.size === 0 || levelSet.has(w.level)) &&
      (topicSet.size === 0 || topicSet.has(w.topic))
  );
  return filtered.length ? filtered : words; // fallback to all if empty
}
