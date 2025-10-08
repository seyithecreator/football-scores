import React from "react";

function Controls({ cols, setCols }) {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "15px",
        borderRadius: "10px",
        display: "inline-block",
        marginBottom: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <label style={{ fontWeight: "bold", marginRight: "10px" }}>
        Columns:
      </label>
      <input
        type="range"
        min="1"
        max="13"
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
        style={{ width: "500px", verticalAlign: "middle" }}
      />
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>{cols}</span>
    </div>
  );
}

export default Controls;
