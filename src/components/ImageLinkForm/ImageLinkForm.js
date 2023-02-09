import React from "react";
import "./ImageLinkForm.css";

export const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This magical brain will detect faces in your image. Give it a try!"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv2 dib white BG">
            Dectect
          </button>
        </div>
      </div>
    </div>
  );
};
