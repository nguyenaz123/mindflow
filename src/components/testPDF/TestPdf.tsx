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

      {open && (
        <div>
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="absolute top-12 right-0 cursor-pointer p-4 text-red-300 hover:text-red bg-red-500"
          >
            <X className="size-7 md:size-8" />
          </button>
          <object
            data="https://ska.oa.osim-martech.com/files/private/document/SG-DOC-1760684724_9_1761205061_MENVTb0mNT.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9za2Eub2Eub3NpbS1tYXJ0ZWNoLmNvbS9maWxlcy9wcml2YXRlL2RvY3VtZW50L1NHLURPQy0xNzYwNjg0NzI0XzlfMTc2MTIwNTA2MV9NRU5WVGIwbU5ULnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3NDMyNjYyOX19fV19&Signature=JecYf1VAcRbh%7eSmpyKLWrFFcHrF1uGvJlNbKQP0-jgfEAy9n29kgfKUlsbjgQYUNrKD9nr9dZTFKIm4IMcCSRnnGb0Z41SktV4QlFV9WlB3iNvrMrz6cmGizONWry09cX9CNztTSEqmv8w-tWA1IO7X9qkrzYdQAY5CmaEBSJynxyXbu8KXxo5KkLCt%7e7hf5YGoZsCjC%7e6Q7WOgqDV9DHPlmf6ZhB7pEP8fu0l6c5ngw3KYJJQ2R5XeGKnbGIzC6OH2PJ3oj%7eXBNUosD%7eGeBZ-DR5OSK2VFhNsoi8I8dYg01doh4HzlAyCmgSmOzPBi03jF9HbhGSiFnYYD8JXu9jQ__&Key-Pair-Id=K1TMO9RMMDST50"
            type="application/pdf"
            className="mt-2 h-[calc(100dvh-4.5rem)] w-full max-w-full"
          >
            <embed
              src="https://ska.oa.osim-martech.com/files/private/document/SG-DOC-1760684724_9_1761205061_MENVTb0mNT.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9za2Eub2Eub3NpbS1tYXJ0ZWNoLmNvbS9maWxlcy9wcml2YXRlL2RvY3VtZW50L1NHLURPQy0xNzYwNjg0NzI0XzlfMTc2MTIwNTA2MV9NRU5WVGIwbU5ULnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3NDMyNjYyOX19fV19&Signature=JecYf1VAcRbh%7eSmpyKLWrFFcHrF1uGvJlNbKQP0-jgfEAy9n29kgfKUlsbjgQYUNrKD9nr9dZTFKIm4IMcCSRnnGb0Z41SktV4QlFV9WlB3iNvrMrz6cmGizONWry09cX9CNztTSEqmv8w-tWA1IO7X9qkrzYdQAY5CmaEBSJynxyXbu8KXxo5KkLCt%7e7hf5YGoZsCjC%7e6Q7WOgqDV9DHPlmf6ZhB7pEP8fu0l6c5ngw3KYJJQ2R5XeGKnbGIzC6OH2PJ3oj%7eXBNUosD%7eGeBZ-DR5OSK2VFhNsoi8I8dYg01doh4HzlAyCmgSmOzPBi03jF9HbhGSiFnYYD8JXu9jQ__&Key-Pair-Id=K1TMO9RMMDST50"
              type="application/pdf"
              className="mt-2 h-[calc(100dvh-4.5rem)] w-full max-w-full"
            />
          </object>
        </div>
      )}
    </>
  );
};
