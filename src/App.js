/**
 * App - main file to start page
 */
import ReactAnime from "react-animejs";
import ChessPiece from "./assets/chesspiece.png";
import "./App.css";
const { Anime } = ReactAnime;

function App() {
  // var textWrapper = document.querySelector(".ml6 .letters");
  // textWrapper.innerHTML = textWrapper.textContent.replace(
  //   /\S/g,
  //   "<span class='letter'>$&</span>"
  // );

  const msg = "Learn ♟️ Chess";

  return (
    <Anime
      animeConfig={{
        delay: 100,
        loop: true,
        autoplay: true,
      }}
      initial={[
        {
          targets: ".letter",
          translateY: ["1.3em", 0],
          translateZ: 0,
          duration: 1000,
          delay: (el, i) => 50 * i
        },
        {
          targets: ".ml6",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        },
      ]}
    >
      <div className="container">
        <h1 className="m16">
          <span className="text-wrapper">
            <span className="letters">{[...msg].map((letter, index) => {
              return <span className="letter" key={letter + index + msg[index]}>{letter}</span>
            })}</span>
          </span>
        </h1>
        <img src={ChessPiece} alt="white queen chess piece" id="chesspiece" />
      </div>
    </Anime>
  );
}

export default App;
