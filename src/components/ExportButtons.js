import React from "react";
import "./ExportButtons.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ExportButtons({ targetRef }) {
  const captureFullElement = async (element) => {
    // Save original styles
    const originalHeight = element.style.height;
    const originalOverflow = element.style.overflow;

    // Expand element to full scroll height
    element.style.height = "auto";
    element.style.overflow = "visible";

    // Capture full scroll area
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    // Restore original style
    element.style.height = originalHeight;
    element.style.overflow = originalOverflow;

    return canvas;
  };

  const exportAsImage = async () => {
    if (!targetRef?.current) return alert("Nothing to export yet.");
    const element = targetRef.current;

    const canvas = await captureFullElement(element);
    const data = canvas.toDataURL("image/png", 0.9);

    const link = document.createElement("a");
    link.href = data;
    link.download = "football-scores.png";
    link.click();
  };

  const exportAsPDF = async () => {
    if (!targetRef?.current) return alert("Nothing to export yet.");
    const element = targetRef.current;

    const canvas = await captureFullElement(element);
    const imgData = canvas.toDataURL("image/png", 0.9);
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pdfHeight) {
      // Center vertically if it fits on one page
      const yOffset = (pdfHeight - imgHeight) / 2;
      pdf.addImage(imgData, "PNG", 0, yOffset, imgWidth, imgHeight);
    } else {
      // Multi-page support
      let position = 0;
      let heightLeft = imgHeight;

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        if (heightLeft > 0) pdf.addPage();
        position -= pdfHeight;
      }
    }

    pdf.save("football-scores.pdf");
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <button className="export-button" onClick={exportAsImage}>
        📸 Export as Image
      </button>
      <button className="export-button" onClick={exportAsPDF}>
        📄 Export as PDF
      </button>
    </div>
  );
}

export default ExportButtons;
