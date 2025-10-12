// import React from "react";
// import "./TeamGrid.css";

// function TeamGrid({ teams, columns }) {
//   // Simple function to format the date
//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const date = new Date(dateStr);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     }); // e.g., "Oct 8, 2025"
//   };

//   return (
//     <div
//       className="team-grid"
//       style={{
//         gridTemplateColumns: `repeat(${columns}, minmax(120px, 1fr))`,
//       }}
//     >
//       {teams.map((team, index) => (
//         <div key={index} className="team-card">
//           <p className="team-date">{formatDate(team.date)}</p>
//           <h3>{team.name}</h3>
//           <p>{team.score}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TeamGrid;

import React from "react";
import "./TeamGrid.css";

function TeamGrid({ teams, columns }) {
  const cols = Math.max(1, Number(columns || 1));
  const gap = 16; // px gap between columns (match your CSS)

  // compute CSS grid column width that accounts for gaps so total fits 100%
  // result: repeat(cols, calc((100% - totalGapPx) / cols))
  const totalGapPx = (cols - 1) * gap;
  const gridCols = `repeat(${cols}, calc((100% - ${totalGapPx}px) / ${cols}))`;

  // small responsive tweaks: reduce card padding & font at high column counts
  const cardPadding = cols >= 12 ? "6px" : cols >= 10 ? "8px" : "12px";
  const cardFont = cols >= 12 ? "0.78rem" : cols >= 10 ? "0.88rem" : "1rem";

  // format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className="team-grid"
      style={{
        gridTemplateColumns: gridCols,
        gap: `${gap}px`,
        // expose CSS vars for card sizing
        "--card-padding": cardPadding,
        "--card-font": cardFont,
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
