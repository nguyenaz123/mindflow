"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("./TestPdf").then((mod) => mod.TestPdf),
  {
    ssr: false,
    loading: () => <p>Loading PDF Viewer...</p>,
  },
);

export default function MyPdf() {
  return (
    <div>
      <PDFViewer />
    </div>
  );
}
