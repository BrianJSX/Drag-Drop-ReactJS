import React from "react";

function Card(props) {
  const { data } = props;
  return <div className="card p-3 m-1 bg-red-300 cursor-pointer">{data.name}</div>;
}

export default Card;
