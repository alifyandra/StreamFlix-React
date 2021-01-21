import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        lineHeight: "6em",
        backgroundColor: "#CB444A",
        color: "white",
        fontFamily: "'Open Sans', sans-serif",
      }}
      className="panel"
    >
      Ahmad Izzudin Alifyandra © 2021{" "}
      <a href="https://github.com/alifyandra/flitts-intern-test" target="blank">
        <FaGithub style={{ marginBottom: "4px", color: "white" }} />
      </a>
    </footer>
  );
};

export default Footer;
