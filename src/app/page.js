import Main from "@/components/Main/Main";
import { MainGamepad } from "@/components/MainGamepad/MainGamepad";

export default function HomePage() {

  return (
    <>
      <Main />
      <MainGamepad playerNumber={0} />
    </>
  );
}