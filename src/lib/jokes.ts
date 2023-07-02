export type Joke = { id: string; joke: string };

const getRandomJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com", {
    cache: "no-cache",
    headers: {
      Accept: "application/json",
    },
  });
  return res.json() as Promise<Joke>;
};

export default getRandomJoke;
