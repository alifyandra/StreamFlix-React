const Duration = ({ duration }) => {
  {
    return duration != 0 ? (
      <p style={{ textAlign: "center" }}>Duration: {duration} minutes</p>
    ) : (
      <></>
    );
  }

  return;
};

export default Duration;
