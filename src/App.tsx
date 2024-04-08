/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useCallback } from "react";
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

  const addGuessedletter = useCallback(
    (letter: string) => {
      if (AlreadyGuessed.includes(letter)) return;

      setAlreadyGuessed((currentGuessed) => [...currentGuessed, letter]);
    },
    [AlreadyGuessed]
  );

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

  const islose=incorrectguessed.length>=6 
  const isWin =WordToGuessed.split("").every((letter)=>AlreadyGuessed.includes(letter))
  return (
    <div className="flex flex-col gap-8 mx-auto my-0 items-center">
      <div className="text-4xl text-center "> { islose &&"Nice Try - Refresh to try again" }{isWin &&"Winner! - Refresh to try again"}</div>
      <HangmanDrawing guessedNomber={incorrectguessed.length} />
      <HangmanWord
        reveal={islose}
        WordToGuessed={WordToGuessed}
        AlreadyGuessed={AlreadyGuessed}
      />
      <div className="self-stretch">
        <HangmanKeybaord
          disabled={isWin ||islose}
          addGuessedletter={addGuessedletter}
          correctLettre={AlreadyGuessed.filter((lettre) =>
            WordToGuessed.includes(lettre)
          )}
          incorrectLettre={incorrectguessed}
        />
      </div>
    </div>
  );
}

export default App;
