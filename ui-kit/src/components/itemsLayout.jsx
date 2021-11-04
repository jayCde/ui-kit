import React from "react";
import "../styles/layout.css";
import AvatarsComponent from "./items/avatars/Avatars";

function ItemsLayout() {
  return (
    <div className="layoutContainer">
      <div className="layoutItems">
        <AvatarsComponent/>
      </div>
    </div>
  );
}

export default ItemsLayout;
