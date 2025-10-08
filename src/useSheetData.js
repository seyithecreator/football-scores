import { useEffect, useState } from "react";

const useSheetData = (sheetId, sheetName) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
        );
        const text = await response.text();
        const json = JSON.parse(text.substring(47).slice(0, -2)); // Clean Google Sheets JSON

        const rows = json.table.rows.map((row) => ({
          name: row.c[0]?.v || "",
          score: row.c[1]?.v || "",
          date: row.c[2]?.v || "",
        }));

        setTeams(rows);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSheet();
  }, [sheetId, sheetName]);

  return { teams, loading, error };
};

export default useSheetData;
