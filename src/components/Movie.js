import propTypes, { string } from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return (
    <div>
        <img src={coverImg} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
          {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>
    );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  corverImg : propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};



export default Movie;