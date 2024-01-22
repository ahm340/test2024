import { useState } from "react";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10));

  function getRandomInt() {
    return randomNumber;
  }

  return (
    <main>
      the Number is : {getRandomInt()}
    </main>
  );
}
