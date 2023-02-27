import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Document, Page } from "react-pdf";

const Policy = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const url = "../PDFs/kushtet.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Navbar /> */}
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Policy;
