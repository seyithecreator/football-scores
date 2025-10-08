import React, { useRef, useState } from "react";
import TeamGrid from "./components/TeamGrid";
import Controls from "./components/Controls";
import ExportButtons from "./components/ExportButtons";
// import teams from "./scores"; // ❌ no longer needed
import useSheetData from "./useSheetData";
import "./App.css";

function App() {
  const [cols, setCols] = useState(4);
  const gridRef = useRef(null);

  const SHEET_ID = "10bBSzxVa0BqHu_0IBfzTt6Thm0S8TTX5llV9ZikRhUY";   // Replace with your Google Sheet ID
  const SHEET_NAME = "Scoresheet";             // Replace with your tab name

  const { teams, loading, error } = useSheetData(SHEET_ID, SHEET_NAME);

  if (loading) return <p>Loading matches...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="app">
      <h1>⚽ WEEKLY FOOTBALL GAME PREDICTIONS</h1>

      <div style={{ margin: "12px 0" }}>
        <Controls cols={cols} setCols={setCols} />
      </div>

      <ExportButtons targetRef={gridRef} />

      <div ref={gridRef}>
        <TeamGrid teams={teams} columns={cols} />
      </div>
    </div>
  );
}

export default App;
