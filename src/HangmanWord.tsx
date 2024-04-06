function HangmanWord() {
  const word = "test";
  const Gussedlettres = ["t", "g"];
  return (
    <div className="flex font-bold text-8xl gap-6 uppercase">
      {word.split("").map((lettre, index) => (
        <span
          className="border-b-[.1em]  border-b-black border-solid"
          key={index}
        >
          <span
            style={{
              visibility: Gussedlettres.includes(lettre) ? "visible" : "hidden",
            }}
          >
            {lettre}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
