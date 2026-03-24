"use client";
import { LoaderCircle, X } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

export const TestPdf = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}></button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={true}
          className="h-[90dvh] max-w-full bg-transparent p-0 sm:max-w-full"
        >
          {isLoading && (
            <div
              className={
                "mx-auto w-[90vw] fixed inset-0 z-50 flex items-center justify-center bg-white/40"
              }
            >
              <LoaderCircle className="size-8 animate-spin" />
            </div>
          )}
          <object
            type="application/pdf"
            className="mt-2 h-[calc(100dvh-4.5rem)] w-full max-w-full"
            onLoad={() => setIsLoading(false)}
            key={"SG-DOC-1760684724"}
            data={
              "https://ska.oa.osim-martech.com/files/private/document/SG-DOC-1760684724_9_1761205061_MENVTb0mNT.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9za2Eub2Eub3NpbS1tYXJ0ZWNoLmNvbS9maWxlcy9wcml2YXRlL2RvY3VtZW50L1NHLURPQy0xNzYwNjg0NzI0XzlfMTc2MTIwNTA2MV9NRU5WVGIwbU5ULnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3NDMyNDczNn19fV19&Signature=eNkOawqFRiKNKjio9lXabmNBD0njgmctCK5%7ewY%7eBfG1y-eIB6fIS-nFBKYBCfaKZ8N6GK%7ewoEETPqyIUU44ishAqt8naksB5Eq9oFV5BwCbQ8cyp6yiZf%7e3WR8Q%7etsie1OvYCGC6giZg9XagxnSa4yymfXA214mIyYOuzap4qmd1aLecogWzQnvGIAHSMU900JCeAh%7eVea2VWOWsA2oAFBN6JZeq1n5DKMjHdldvlXCJyn5ERzuAAkizlFj6jfO5dl4gB-fQXKcdU9j2jxbKED-24FWbY5%7e3WICrL96yBTq8fEc6lY3fKnfNenzzIWlVp5UesCqlUoJgVTkRM4IoJw__&Key-Pair-Id=K1TMO9RMMDST50"
            }
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
