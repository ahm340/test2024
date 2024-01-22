export default function Home() {
function getRandomInt(){
  return Math.floor(Math.random() * 10);
}
  return (
    <main>
the Numbber is : {getRandomInt()}
    </main>
  );
}
