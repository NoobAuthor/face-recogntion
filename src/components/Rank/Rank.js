import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="">
      <div className="white f3 ">{`${name}, your current rank count is...`}</div>
      <div className="f1 white">{entries}</div>
    </div>
  );
};

export default Rank;
