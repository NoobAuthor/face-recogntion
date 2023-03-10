import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain2.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          <img src={brain} style={{ paddingTop: "55px" }} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
