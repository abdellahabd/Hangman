import styles from "./Keyboard.module.css";

function HangmanKeybaord() {
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
        return (
          <button
            className={`border-black border-[3px] uppercase p-[.5rem] aspect-square font-bold cursor-pointer text-black text-3xl  ${styles.btn}`}
            // ${styles.inactive}
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
