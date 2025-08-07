export function speak(text: string) {
  if (typeof window === "undefined") return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "es-ES";
  // choose a Spanish voice if available
  const voices = speechSynthesis.getVoices();
  const esVoice = voices.find((v) => v.lang.startsWith("es"));
  if (esVoice) utter.voice = esVoice;
  speechSynthesis.speak(utter);
}
