import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const StreamNavbar = ({ balance }) => {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="sm">
        <Link to="/">
          <Navbar.Brand>
            <span
              style={{
                fontFamily: "'Freckle Face', sans-serif",
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
            data-testid="balance"
          >
            <b>Balance:</b> Rp. {balance.toLocaleString()}
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default StreamNavbar;
