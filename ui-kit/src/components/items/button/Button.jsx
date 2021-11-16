import React from "react";
import "../../../styles/items/buttons.css";
import { buttonAssets } from "../../assets/assets";
import { FaCode } from "react-icons/fa";

function ButtonComponent() {
  return (
    <div className="btnContainer">
      <h5 className="btnHeading">Buttons...</h5>
      <div className="btnItems">
        {buttonAssets.map((button, index) => (
          <div className="btnItem" key={index}>
            <button className={`btn ${button.type}`}>{button.name}</button>
            <button className="snippetBtn">
              <FaCode />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonComponent;
