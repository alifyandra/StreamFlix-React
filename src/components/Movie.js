import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Movie = ({ movie }) => {
  const img_base_url = "https://image.tmdb.org/t/p/w200/";
  function getPrice() {
    let rating = movie.vote_average;
    console.log(rating);
    if (rating < 3) {
      return 3500;
    } else if (rating < 6) {
      return 8250;
    } else if (rating < 8) {
      return 16350;
    } else {
      return 21250;
    }
  }
  return (
    <Card>
      <Card.Img variant="top" src={img_base_url + movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>
          {movie.owned ? (
            <span style={{ color: "green" }}>Owned</span>
          ) : (
            <>Rp. {getPrice()}</>
          )}
        </Card.Text>
        <Link
          to={"/" + movie.id + "-" + movie.original_title.replace(/\s+/g, "-")}
        >
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Movie;
