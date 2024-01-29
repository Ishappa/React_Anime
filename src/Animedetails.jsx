import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Animedetails() {
  let { mal_id } = useParams();
  let [anime, setanime] = useState(null);
  let [error, seterror] = useState(null);
  let [pending, setpending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.jikan.moe/v4/anime/" + mal_id)
        .then((Response) => {
          if (Response.ok == false) {
            throw Error(" erorr!");
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
    }, 1000);
  }, [mal_id]);

  return (
    <section className="Anime-details1">
      {pending && <div className="loader"></div>}
      {error && (
        <div className="errormsg">
          <h1>{error}</h1>
        </div>
      )}
      {anime && (
        <div className="Anime-details2">
          <div className="Anime-image">
            <img src={anime.images.jpg.image_url} alt="" />
          </div>
          <div>
            <div className="headings">
              <h3>Title:{anime.title}</h3>
              <h3>Genre:{anime.genres[0].name}</h3>
              <h3>Score:{anime.score}</h3>
              <h3>Year:{anime.year}</h3>
            </div>
            <p>{anime.synopsis}</p>
          </div>
        </div>
      )}
    </section>
  );
}
export default Animedetails;
