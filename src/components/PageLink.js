import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function StackOverflowExample() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/sample"), [history]);

  return <></>;
}
