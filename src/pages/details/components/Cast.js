const Cast = ({ casts }) => {
  return (
    <div style={{ padding: "1em 11vw 0em 11vw" }}>
      <h5>Cast: </h5>
      <p style={{ fontSize: "12px", color: "#747474" }}>
        {casts.map((cast, i) => {
          return (
            <>
              {i < casts.length - 1 ? (
                <span key={i}>{cast.name}, </span>
              ) : (
                <span>{cast.name}</span>
              )}
            </>
          );
        })}
      </p>
    </div>
  );
};

export default Cast;
