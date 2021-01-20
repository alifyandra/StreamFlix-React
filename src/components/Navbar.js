import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const StreamNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Link to="/">
          <Navbar.Brand>StreamFlix</Navbar.Brand>
        </Link>
      </Navbar>
    </>
  );
};

export default StreamNavbar;
