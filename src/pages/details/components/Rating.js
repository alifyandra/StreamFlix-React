import { FaStar } from "react-icons/fa";
const Rating = ({ rating }) => {
  return (
    <div style={{ textAlign: "center", padding: "0.5em" }}>
      <FaStar style={{ marginBottom: "5px" }} /> {rating}
    </div>
  );
};

export default Rating;
