import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import getPrice from "../../../utils/getPrice";

const Similar = ({ similar, setCurrPage, ownedMovies }) => {
  const img_base_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div style={{ marginTop: "1.5em" }}>
      {similar.length != 0 ? (
        <h4 style={{ padding: "1em" }}>Similar Titles:</h4>
      ) : (
        <></>
      )}
      <CardGroup>
        {similar.slice(0, 3).map((sim, i) => {
          return (
            <Card
              style={{
                width: "16rem",
                margin: "0 auto",
                float: "none",
                marginBottom: "10px",
              }}
            >
              <Card.Img variant="top" src={img_base_url + sim.poster_path} />
              <Card.Body>
                <Card.Title>{sim.title}</Card.Title>
                <Card.Text>
                  {!ownedMovies.includes(sim.id) ? (
                    <>Rp. {getPrice(sim).toLocaleString()}</>
                  ) : (
                    <span style={{ color: "green" }}>Owned</span>
                  )}
                </Card.Text>

                <Link
                  to={
                    "/" +
                    sim.id +
                    "-" +
                    sim.title
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

export default Similar;
