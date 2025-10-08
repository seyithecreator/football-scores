import React, { useRef, useState } from "react";
import TeamGrid from "./components/TeamGrid";
import Controls from "./components/Controls";
import ExportButtons from "./components/ExportButtons";
import teams from "./scores"; // ✅ Import your data
import "./App.css";

function App() {
  const [cols, setCols] = useState(4);
  const gridRef = useRef(null);

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
