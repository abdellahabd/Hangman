/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import allword from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeybaord from "./HangmanKeybaord";
import HangmanWord from "./HangmanWord";
import "./index.css";

function App() {
  const [WordToGuessed, setWordToGuessed] = useState(() => {
    return allword[Math.floor(Math.random() * allword.length)];
  });
  const [AlreadyGuessed, setAlreadyGuessed] = useState<string[]>([]);

  function addGuessedletter(letter: string) {
    if (AlreadyGuessed.includes(letter)) return;
    setAlreadyGuessed((currentGuessed) => [...currentGuessed, letter]);
  }
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key.match(/^[a-b]$/)) return;
      e.preventDefault();
      addGuessedletter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [AlreadyGuessed]);

  const incorrectguessed = AlreadyGuessed.filter((lettre) => {
    return !WordToGuessed.includes(lettre);
  });
  return (
    <div className="flex flex-col gap-8 mx-auto my-0 items-center">
      <div className="text-4xl text-center ">Lose or win</div>
      <HangmanDrawing guessedNomber={incorrectguessed.length} />
      <HangmanWord
        WordToGuessed={WordToGuessed}
        AlreadyGuessed={AlreadyGuessed}
      />
      <div className="self-stretch">
        <HangmanKeybaord />
      </div>
    </div>
  );
}

export default App;
