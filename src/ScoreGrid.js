import React from 'react';

const teams = [
  { name: "Manchester United", score: "2 - 1" },
  { name: "Chelsea", score: "1 - 1" },
  { name: "Arsenal", score: "3 - 0" },
  { name: "Liverpool", score: "0 - 0" },
  { name: "Barcelona", score: "4 - 2" },
  { name: "Real Madrid", score: "2 - 3" },
  { name: "Bayern Munich", score: "1 - 0" },
  { name: "Borussia Dortmund", score: "2 - 2" },
  { name: "Paris Saint-Germain", score: "3 - 1" },
  { name: "AC Milan", score: "1 - 2" },
  { name: "Inter Milan", score: "0 - 0" },
  { name: "Juventus", score: "1 - 1" },
  { name: "Atletico Madrid", score: "2 - 0" },
  { name: "Sevilla", score: "3 - 3" },
  { name: "Ajax", score: "2 - 4" },
  { name: "Porto", score: "0 - 1" },
  { name: "Benfica", score: "1 - 0" },
  { name: "Galatasaray", score: "2 - 2" },
  { name: "Napoli", score: "4 - 1" },
  { name: "Tottenham Hotspur", score: "3 - 2" },
  { name: "Newcastle United", score: "2 - 0" },
  { name: "Leicester City", score: "1 - 1" },
  { name: "West Ham United", score: "0 - 3" },
  { name: "Aston Villa", score: "1 - 2" },
  { name: "RB Leipzig", score: "2 - 0" },
  { name: "PSV Eindhoven", score: "0 - 1" },
];

function ScoreGrid({ cols }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "10px",
        padding: "20px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {teams.map((team, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={{ marginBottom: "8px" }}>{team.name}</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            {team.score}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ScoreGrid;