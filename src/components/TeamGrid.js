import React from "react";
import "./TeamGrid.css";

function TeamGrid({ teams, columns }) {
  return (
    <div
      className="team-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(120px, 1fr))`,
      }}
    >
      {teams.map((team, index) => (
        <div key={index} className="team-card">
          <h3>{team.name}</h3>
          <p>{team.score}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;
