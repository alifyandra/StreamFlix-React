import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const StreamNavbar = ({ balance }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Link to="/">
          <Navbar.Brand>StreamFlix</Navbar.Brand>
        </Link>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Item style={{ color: "white", fontWeight: "400" }}>
            Balance: Rp. {balance}
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default StreamNavbar;
