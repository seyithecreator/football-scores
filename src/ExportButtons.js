import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ExportButtons({ targetRef }) {
  const exportAsImage = async () => {
    const element = targetRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = data;
    link.download = "football-scores.png";
    link.click();
  };

  const exportAsPDF = async () => {
    const element = targetRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("l", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("football-scores.pdf");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={exportAsImage}>📸 Export as Image</button>
      <button onClick={exportAsPDF} style={{ marginLeft: "10px" }}>
        📄 Export as PDF
      </button>
    </div>
  );
}

export default ExportButtons;
