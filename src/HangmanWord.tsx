type HangmanWordprops = {
  WordToGuessed: string;
  AlreadyGuessed: string[];
  reveal :boolean;
};
function HangmanWord({ WordToGuessed, AlreadyGuessed,reveal=false }: HangmanWordprops) {
  return (
    <div className="flex font-bold text-8xl gap-6 uppercase">
      {WordToGuessed.split("").map((lettre, index) => (
        <span
          className="border-b-[.1em]  border-b-black border-solid w-[5vw] "
          key={index}
        >
          <span
            style={{
              visibility: AlreadyGuessed.includes(lettre) || reveal
                ? "visible"
                : "hidden",
              color: reveal ?"red":""
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
