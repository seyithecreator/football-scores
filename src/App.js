import React, { useRef, useState, useEffect } from "react";
import TeamGrid from "./components/TeamGrid";
import Controls from "./components/Controls";
import ExportButtons from "./components/ExportButtons";
import useSheetData from "./useSheetData";
import "./App.css";

function App() {
  const [cols, setCols] = useState(4);
  const gridRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const SHEET_ID = "10bBSzxVa0BqHu_0IBfzTt6Thm0S8TTX5llV9ZikRhUY"; 
  const SHEET_NAME = "Scoresheet"; 

  const { teams, loading, error } = useSheetData(SHEET_ID, SHEET_NAME);

  useEffect(() => {
    // Detect screen size and show appropriate popup
    if (window.innerWidth <= 600) {
      setPopupMessage(
        "📱 For the best experience, please use a laptop to adjust the grid with the slider."
      );
    } else {
      setPopupMessage("💡 Use the slider above to adjust how many columns appear in the grid.");
    }
    setShowPopup(true);

    // Auto-hide popup after 8 seconds
    const timer = setTimeout(() => setShowPopup(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Loading matches...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="app">
      <h1>⚽ WEEKLY FOOTBALL GAME PREDICTIONS</h1>

      {/* Popup message */}
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Got it</button>
        </div>
      )}

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
