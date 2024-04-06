/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import allword from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeybaord from "./HangmanKeybaord";
import HangmanWord from "./HangmanWord";
import "./index.css";

function App() {
  const [Randomword, setRandomword] = useState(() => {
    return allword[Math.floor(Math.random() * allword.length)];
  });
  const [already, setalready] = useState<string[]>([]);
  return (
    <div className="flex flex-col gap-8 mx-auto my-0 items-center">
      <div className="text-4xl text-center ">Lose or win</div>
      <HangmanDrawing />
      <HangmanWord />
      <div className="self-stretch">
        <HangmanKeybaord />
      </div>
    </div>
  );
}

export default App;
