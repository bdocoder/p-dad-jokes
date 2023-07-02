import { useState } from "react";
import type { Joke } from "./lib/jokes";
import getRandomJoke from "./lib/jokes";

export default function App(props: { initialJoke: Joke }) {
  const [joke, setJoke] = useState(props.initialJoke);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleNewJoke = () => {
    setIsButtonDisabled(true);
    getRandomJoke().then((joke) => {
      setJoke(joke);
      setIsButtonDisabled(false);
    });
  };

  return (
    <div
      className="has-background-light"
      style={{
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <div
        className="box has-text-centered"
        style={{ margin: "auto", maxWidth: "35rem" }}
      >
        <p className="is-size-4 block">{joke.joke}</p>
        <button
          className="button is-primary is-medium"
          onClick={handleNewJoke}
          disabled={isButtonDisabled}
        >
          New joke
        </button>
      </div>
    </div>
  );
}
