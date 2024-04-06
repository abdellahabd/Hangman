type HangmanDrawingprops = {
  guessedNomber: number;
};
function HangmanDrawing({ guessedNomber }: HangmanDrawingprops) {
  const HEAD = (
    <div className="w-[50px] h-[50px] border-black absolute rounded-full border-[10px] top-[49px] right-[-20px]" />
  );
  const Body = (
    <div className="w-[10px] h-[100px] bg-black absolute  top-[98px] right-[0px]" />
  );
  const Right_arm = (
    <div className="w-[100px] h-[10px] bg-black absolute  top-[146px] right-[-100px] rotate-[-30deg] origin-bottom-left" />
  );
  const Left_arm = (
    <div className="w-[100px] h-[10px] bg-black absolute  top-[146px] right-[10px] rotate-[30deg] origin-bottom-right" />
  );
  const Right_leg = (
    <div className="w-[100px] h-[10px] bg-black absolute  top-[188px] right-[-90px] rotate-[60deg] origin-bottom-left" />
  );
  const Left_leg = (
    <div className="w-[100px] h-[10px] bg-black absolute  top-[188px] right-[0px] rotate-[-60deg] origin-bottom-right" />
  );
  const Body_part = [HEAD, Body, Right_arm, Left_arm, Right_leg, Left_leg];
  return (
    <div className="relative">
      {Body_part.slice(0, guessedNomber)}
      <div className="h-[50px] w-[10px] bg-black  absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black  ml-[120px] " />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}

export default HangmanDrawing;
