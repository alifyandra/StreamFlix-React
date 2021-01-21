import Pagination from "react-bootstrap/Pagination";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Paginator = ({ pages, currPage, setCurrPage }) => {
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState([]);
  const handleOnClick = (n) => {
    history.push("/?page=" + n);
    setCurrPage(n);
  };

  useEffect(() => {
    let items = [];
    for (let number = 1; number <= pages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number == currPage}
          onClick={() => handleOnClick(number)}
        >
          {number}
        </Pagination.Item>
      );
      setPageNumber(items);
    }
  }, [currPage, pages]);

  return (
    <div style={{ overflowX: "scroll" }}>
      <Pagination>{pageNumber}</Pagination>
    </div>
  );
};

export default Paginator;
