import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import getPrice from "../../../utils/getPrice";

const Recommendations = ({ recs, setCurrPage, ownedMovies }) => {
  const img_base_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div style={{ marginTop: "1.5em" }}>
      {recs.length != 0 ? (
        <h4 style={{ padding: "1em" }}>Recommended Titles:</h4>
      ) : (
        <></>
      )}
      <CardGroup>
        {recs.slice(0, 3).map((rec, i) => {
          return (
            <Card
              key={i}
              style={{
                width: "16rem",
                margin: "0 auto",
                float: "none",
                marginBottom: "10px",
              }}
            >
              <Card.Img variant="top" src={img_base_url + rec.poster_path} />
              <Card.Body>
                <Card.Title>{rec.title}</Card.Title>
                <Card.Text>
                  {!ownedMovies.includes(rec.id) ? (
                    <>Rp. {getPrice(rec).toLocaleString()}</>
                  ) : (
                    <span style={{ color: "green" }}>Owned</span>
                  )}
                </Card.Text>

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
                  <Button
                    variant="danger"
                    onClick={() => {
                      setCurrPage(window.location.pathname);
                    }}
                  >
                    Details
                  </Button>
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
