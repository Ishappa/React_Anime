import { useEffect, useState } from "react";
import Animelist from "./Animelist";
function Home() {
  let [error, seterror] = useState(null);
  let [anime, setanime] = useState(null);
  let [pending, setpending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.jikan.moe/v4/anime")
        .then((Response) => {
          if (Response.ok == false) {
            throw Error(" erorr! Try Again");
          }
          return Response.json();
        })
        .then((obj) => {
          return obj.data;
        })
        .then((data) => {
          setanime(data);
          setpending(false);
        })
        .catch((err) => {
          seterror(err.message);
          setpending(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {pending && <div className="loader"></div>}
      {error && (
        <div className="errormsg">
          <h1>{error}</h1>
        </div>
      )}
      {anime && <Animelist value={anime} title="All Movies" />}
      {anime && (
        <Animelist
          value={anime.filter((animes) => {
            return animes.genres[0].name === "Action";
          })}
          title="Action Movies"
        />
      )}
      {anime && (
        <Animelist
          value={anime.filter((animes) => {
            return animes.genres[0].name === "Comedy";
          })}
          title="Comedy Movies"
        />
      )}
      {anime && (
        <Animelist
          value={anime.filter((animes) => {
            return animes.genres[0].name === "Drama";
          })}
          title="Drama Movies"
        />
      )}
    </div>
  );
}
export default Home;
