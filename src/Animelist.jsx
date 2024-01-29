import { Link } from "react-router-dom";
function Animelist({ value, title }) {
  console.log(value);
  return (
    <section className="anime-section">
      <h1>{title}</h1>
      <div className="anime-list">
        {value.map((anime) => {
          return (
            <Link to={`/Animedetails/${anime.mal_id}`}>
              <div className="anime-list1">
                <img src={anime.images.jpg.image_url} alt="" />
                <h3>{anime.title}</h3>
                <h3>Genres:{anime.genres[0].name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default Animelist;
