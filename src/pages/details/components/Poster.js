const Poster = ({ imgUrl }) => {
  const img_base_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "12em",
          height: "auto",
          borderRadius: "8%",
        }}
      >
        <img
          src={img_base_url + imgUrl}
          width="100%"
          style={{ borderRadius: "inherit" }}
        />
      </div>
    </div>
  );
};

export default Poster;
