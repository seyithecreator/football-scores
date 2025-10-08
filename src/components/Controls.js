import React from "react";

function Controls({ cols, setCols }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        background: "#f5f5f5",
        borderRadius: 10,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        marginBottom: 16,
      }}
    >
      <label style={{ fontWeight: 700 }}>Columns</label>
      <input
        type="range"
        min="1"
        max="13"
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
        style={{ width: 300 }}
      />
      <span style={{ fontWeight: 700 }}>{cols}</span>
    </div>
  );
}

export default Controls;
