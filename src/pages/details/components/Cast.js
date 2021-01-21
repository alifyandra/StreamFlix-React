const Cast = ({ casts }) => {
  return (
    <div style={{ padding: "1em 12vw 0em 12vw" }}>
      <h5>Cast: </h5>
      <p style={{ fontSize: "12px" }}>
        {casts.map((cast, i) => {
          return <>{cast.name}, </>;
        })}
      </p>
    </div>
  );
};

export default Cast;
