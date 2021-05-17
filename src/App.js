/**
 * App - main file to start page
 */
import ReactAnime from "react-animejs";
import "./App.css";
const { Anime } = ReactAnime;

function App() {
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
          translateY: ["1.3rem", 0],
          translateZ: 0,
          duration: 1000,
          delay: (el, i) => 50 * i,
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
            <span className="letters">
              {[...msg].map((letter, index) => {
                return (
                  <span className="letter" key={letter + index + msg[index]}>
                    {letter}
                  </span>
                );
              })}
            </span>
          </span>
        </h1>
        <div className="cardWrapper">
          <div className="card" tabIndex="0">What is Chess?</div>
          <div className="card" tabIndex="1">Chess Pieces</div>
          <div className="card" tabIndex="2">How to Play</div>
        </div>
      </div>
    </Anime>
  );
}

export default App;
