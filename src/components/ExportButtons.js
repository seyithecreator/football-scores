import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ExportButtons({ targetRef }) {
  const exportAsImage = async () => {
    if (!targetRef?.current) return alert("Nothing to export yet.");
    const element = targetRef.current;

    // increase scale for better resolution
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = data;
    link.download = "football-scores.png";
    link.click();
  };

  const exportAsPDF = async () => {
    if (!targetRef?.current) return alert("Nothing to export yet.");
    const element = targetRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    // create a PDF sized to the canvas aspect ratio
    const pdf = new jsPDF("l", "mm", "a4"); // landscape A4
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("football-scores.pdf");
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <button onClick={exportAsImage} style={{ padding: "8px 12px", marginRight: 10 }}>
        📸 Export as Image
      </button>
      <button onClick={exportAsPDF} style={{ padding: "8px 12px" }}>
        📄 Export as PDF
      </button>
    </div>
  );
}

export default ExportButtons;
