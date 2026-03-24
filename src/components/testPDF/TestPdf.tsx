"use client";
import { LoaderCircle, X } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

export const TestPdf = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="text-white bg-white">
        Open Pdf
      </button>
      -
      {open && (
        <div>
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="absolute top-12 right-0 cursor-pointer p-4 text-red-300 hover:text-red bg-red-500"
          >
            <X className="size-7 md:size-8" />
          </button>
          <div className="h-[90dvh] w-full overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch]">
            <object
              data="https://ska.oa.osim-martech.com/files/private/document/SG-DOC-1760684724_9_1761205061_MENVTb0mNT.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9za2Eub2Eub3NpbS1tYXJ0ZWNoLmNvbS9maWxlcy9wcml2YXRlL2RvY3VtZW50L1NHLURPQy0xNzYwNjg0NzI0XzlfMTc2MTIwNTA2MV9NRU5WVGIwbU5ULnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3NDMzMDAxOX19fV19&Signature=bc%7e1pyXxI2HAHH85Xcjs3zpUjdAY8z5pJEt6jd8Ot7KkjQ6sHYXrH3Mw2XKu%7eo4oyiG2asNKP%7eYQHKfEMudSqCC%7eU3oR2V0m0hxfsYVlbS-TZohdCnrtGE8aPomu6VKiVkyyfLGdLwfnb0vZy6pfK%7eIDQHF%7et%7e4nz6btZBc1SOjHWoTXIKNb9dkdXHVZfVGeznxFzwWlanZpDQCy5%7eQTivd7Ng1Qd-ZqVdsA2MfQL5MAdRXnjDkmq4n3K1eCmUHEFECDEmBmigx4BTMudlmKjgfH2hlTx6%7eu4KybOmI0q4uTY811c-eJn3Jh8e7lJORrRTdGgZAFQhiSPAt74zp0ug__&Key-Pair-Id=K1TMO9RMMDST50"
              type="application/pdf"
              className="w-full h-[2000px]"
            >
              <p>Trình duyệt không hỗ trợ xem PDF. </p>
            </object>
          </div>
        </div>
      )}
    </>
  );
};
