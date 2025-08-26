import { FC } from "react";
import { Button } from "../ui/button";

type QuotationDetailsHeaderProps = {
  quotation: IQuotation;
};
export const QuotationDetailsHeader: FC<QuotationDetailsHeaderProps> = ({ quotation }) => {
  return (
    <div>
      <div className="grid [grid-template-columns:2fr_300px_1fr] gap-x-5">
        <div className="flex justify-between gap-10">
          <p className="text-xl font-bold">Quotation Number:</p>
          <p className="p-x-3 h-8 flex-1 border-2 text-xl">{quotation.id}</p>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-x-2">
          <p className="justify-self-end text-xl font-bold">Quotation date:</p>
          <p className=" text-xl">{quotation.createdAt}</p>
          <p className="justify-self-end text-xl font-bold">Expire date:</p>
          <p className=" text-xl">{quotation.expiredAt}</p>
        </div>
        <div className="flex gap-2 justify-self-end">
          <Button>Print</Button>
          <Button>Send</Button>
          <Button>Convert to sale order</Button>
          <Button>Close</Button>
        </div>
      </div>
      <div>
        <div className="mt-4 grid grid-cols-[2fr_repeat(3,1fr)] gap-1">
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-start font-bold">Quotation to:</p>
            <p className="justify-self-start"> {quotation.clientName}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Contact No:</p>
            <p className="justify-self-start"> {quotation.clientPhoneNumber}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Email:</p>
            <p className="justify-self-start"> {quotation.clientEmail}</p>
          </div>
        </div>
      </div>
      <hr className="mt-2 h-0.5 bg-black" />
    </div>
  );
};
