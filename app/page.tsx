export default function Home() {
  const randomNumber = Math.floor(Math.random() * 10);

  function getRandomInt() {
    return randomNumber;
  }

  return (
    <main>
      the Number is : {getRandomInt()}
    </main>
  );
}
