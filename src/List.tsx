import React from "react";
import { Link } from "react-router-dom";
const List = () => {
  const Arr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>HEllo</h1>
      {Arr.map((id: any) => {
        return (
          <>
            {" "}
            <Link to={`${id}`} state={{ id }}>
              <button>{id}</button>
            </Link>
          </>
        );
      })}
    </>
  );
};
export default List;
