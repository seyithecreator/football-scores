import React from "react";
import "./TeamGrid.css";

function TeamGrid({ teams, columns }) {
  // Simple function to format the date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }); // e.g., "Oct 8, 2025"
  };

  return (
    <div
      className="team-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(120px, 1fr))`,
      }}
    >
      {teams.map((team, index) => (
        <div key={index} className="team-card">
          <p className="team-date">{formatDate(team.date)}</p>
          <h3>{team.name}</h3>
          <p>{team.score}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;
