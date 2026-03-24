"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { LoaderCircle, X } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const TestPdf = () => {
  const [numPages, setNumPages] = useState<number>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const pdfUrl =
    "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white bg-black px-4 py-2"
      >
        Open Pdf
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 overflow-auto">
          <button
            onClick={() => setOpen(false)}
            className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full"
          >
            <X />
          </button>

          {loading && (
            <div className="flex justify-center items-center h-screen">
              <LoaderCircle className="animate-spin text-white" />
            </div>
          )}

          <div className="flex justify-center p-4">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
              error="Failed to load PDF"
            >
              {Array.from(new Array(numPages), (_, index) => (
                <Page
                  key={index}
                  pageNumber={index + 1}
                  width={window.innerWidth > 768 ? 800 : 350}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </>
  );
};
