import React, { useRef, useState } from "react";
import TeamGrid from "./components/TeamGrid";
import Controls from "./components/Controls";
import ExportButtons from "./components/ExportButtons";
import "./App.css";

function App() {
  // sample 26 teams (you can replace later with live data)
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

  const [cols, setCols] = useState(4);
  const gridRef = useRef(null);

  return (
    <div className="app">
      <h1>⚽WEEKLY FOOTBALL GAME PREDICTIONS</h1>

      <div style={{ margin: "12px 0" }}>
        <Controls cols={cols} setCols={setCols} />
      </div>

      <ExportButtons targetRef={gridRef} />

      {/* the element we will export */}
      <div ref={gridRef}>
        <TeamGrid teams={teams} columns={cols} />
      </div>
    </div>
  );
}

export default App;
