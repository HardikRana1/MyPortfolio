import React from 'react';

const PdfViewer = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My Resume</h1>
      <iframe
        src="../../assets/HardikRana_SoftwareEngineer.pdf"
        title="PDF Viewer"
        width="80%"
        height="600px"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
