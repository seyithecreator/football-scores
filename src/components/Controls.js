import React from "react";
import "./Controls.css";

function Controls({ cols, setCols }) {
  return (
    <div className="controls">
      <input
        type="range"
        min="1"
        max="11"
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
        className="slider"
      />
    </div>
  );
}

export default Controls;
