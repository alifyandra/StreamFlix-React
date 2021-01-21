import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import getPrice from "../../../utils/getPrice";

const Recommendations = ({ recs }) => {
  const img_base_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div style={{ marginTop: "1.5em" }}>
      <h4 style={{ padding: "1em" }}>Recommended Titles:</h4>
      <CardGroup>
        {recs.slice(0, 5).map((rec, i) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img_base_url + rec.poster_path} />
              <Card.Body>
                <Card.Title>{rec.title}</Card.Title>
                <Card.Text>Rp. {getPrice(rec.vote_average)}</Card.Text>
                <Link
                  to={
                    "/" +
                    rec.id +
                    "-" +
                    rec.title
                      .replace(/[^\w\s]/gi, "")
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                  }
                >
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
};

export default Recommendations;
