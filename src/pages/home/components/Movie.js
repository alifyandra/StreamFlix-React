import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import getPrice from "../../../utils/getPrice";

const Movie = ({ movie }) => {
  const img_base_url = "https://image.tmdb.org/t/p/w500/";

  return (
    <Card>
      <Card.Img variant="top" src={img_base_url + movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>
          {movie.owned ? (
            <span style={{ color: "green" }}>Owned</span>
          ) : (
            <>Rp. {getPrice(movie).toLocaleString()}</>
          )}
        </Card.Text>
        <Link
          to={
            "/" +
            movie.id +
            "-" +
            movie.original_title
              .replace(/[^\w\s]/gi, "")
              .toLowerCase()
              .replace(/\s+/g, "-")
          }
        >
          <Button variant="danger">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Movie;
