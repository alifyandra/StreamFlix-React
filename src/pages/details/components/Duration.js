import { FaClock } from "react-icons/fa";
const Duration = ({ duration }) => {
  return duration != 0 ? (
    <p style={{ textAlign: "center" }}>
      <FaClock style={{ marginBottom: "5px" }} /> <i>{duration} minutes </i>
    </p>
  ) : (
    <></>
  );
};

export default Duration;
