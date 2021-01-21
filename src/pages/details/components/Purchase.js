import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const Purchase = ({
  price,
  owned,
  ownedMovies,
  setOwnedMovies,
  movieId,
  balance,
  setBalance,
}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "1em" }}>
      {owned ? (
        <Button variant="success" size="lg" disabled>
          Owned
        </Button>
      ) : (
        <div>
          <h6>Buy now for</h6>
          <Button
            variant="success"
            size="lg"
            onClick={() => {
              if (balance >= price) {
                setOwnedMovies([...ownedMovies, movieId]);
                setBalance(balance - price);
              } else {
                Swal.fire("Oops...", "Insufficient balance!", "error");
              }
            }}
          >
            Rp. {price.toLocaleString()}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Purchase;
