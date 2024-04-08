import styles from "./Keyboard.module.css";

type HangmanKeybaordProps = {
  addGuessedletter: (lettre: string) => void;
  correctLettre: string[];
  incorrectLettre: string[];
  disabled ?: boolean;
};
function HangmanKeybaord({
  addGuessedletter,
  correctLettre,
  incorrectLettre,
  disabled=false,
}: HangmanKeybaordProps) {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="grid grid-cols-Keybord-grid gap-[.5rem] px-2 ">
      {KEYS.map((lettre, index) => {
        const correct = correctLettre.includes(lettre);
        const incorrect = incorrectLettre.includes(lettre);
        return (
          <button
            onClick={() => {
              addGuessedletter(lettre);
            }}
            className={`border-black border-[1px] aspect-video uppercase p-[.1rem] font-bold cursor-pointer text-black text-1xl lg:aspect-square lg:text-3xl lg:p-[.5rem] lg:border-[3px] ${
              styles.btn
            } ${correct ? styles.active : ""} ${
              incorrect ? styles.inactive : ""
            }`}
            disabled={correct || incorrect||disabled}
            key={index}
          >
            {lettre}
          </button>
        );
      })}
    </div>
  );
}

export default HangmanKeybaord;
