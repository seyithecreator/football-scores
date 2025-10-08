import React from "react";
import "./TeamGrid.css"; // 👈 we'll add this file next

const TeamGrid = ({ teams = [], columns = 4 }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "12px",
    padding: "10px",
  };

  return (
    <div style={gridStyle}>
      {teams.map((team, i) => (
        <div key={i} className="team-card">
          <div className="team-name">{team.name}</div>
          {team.score && <div className="team-score">{team.score}</div>}
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
