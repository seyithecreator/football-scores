import React, { useState, useEffect } from "react";
import "./TeamGrid.css";
import "./Modal.css";

function TeamGrid({ teams = [], columns = 4 }) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const openModal = (team) => {
    setSelectedTeam(team);

    // prevent background scroll and compensate for scrollbar width
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("modal-open");
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  };

  const closeModal = () => {
    setSelectedTeam(null);
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";
  };

  // Cleanup in case the component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <>
      <div
        className="team-grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(120px, 1fr))`,
        }}
      >
        {teams.map((team, index) => (
          <div
            key={index}
            className="team-card"
            onClick={() => openModal(team)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") openModal(team); }}
          >
            <div className="team-date">{team.date}</div>
            <h3>{team.name}</h3>
            <p className="team-score">{team.score}</p>
          </div>
        ))}
      </div>

      {selectedTeam && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="close-button" onClick={closeModal} aria-label="Close">×</button>

            <h2 className="modal-heading">{selectedTeam.name}</h2>

            <div className="modal-details">
              <p><strong>Score:</strong> {selectedTeam.score}</p>
              <p><strong>Date:</strong> {selectedTeam.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamGrid;
