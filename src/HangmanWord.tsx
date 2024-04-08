type HangmanWordprops = {
  WordToGuessed: string;
  AlreadyGuessed: string[];
  reveal :boolean;
};
function HangmanWord({ WordToGuessed, AlreadyGuessed,reveal=false }: HangmanWordprops) {
  return (
    <div className="flex font-bold text-8xl gap-8 lg:gap-6 uppercase">
      {WordToGuessed.split("").map((lettre, index) => (
        <span
          // className="border-b-[.1em]  border-b-black border-solid  w-[4vw] lg:w-[5vw] "
          style={{ borderBottom: ".1em solid black" }}
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
