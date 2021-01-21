import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const StreamNavbar = ({ balance }) => {
  const [ownedMovies, setOwnedMovies] = useState([]);

  return (
    <>
      <Navbar bg="danger" variant="dark" expand="sm">
        <Link to="/">
          <Navbar.Brand>
            <span
              style={{
                fontFamily: "'Freckle Face', cursive",
                fontSize: "1.8em",
              }}
            >
              StreamFlix
            </span>{" "}
            <span style={{ fontSize: "10px" }}>
              <i>powered by TMDb</i>
            </span>
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Item
            style={{
              color: "white",
              fontWeight: "400",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            <b>Balance:</b> Rp. {balance.toLocaleString()}
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default StreamNavbar;
