import { FC } from "react";
import { Input } from "../ui/input";
import { QuotationDetailsHeader } from "./quotation-details-header";
import { QuotationDetailsTable } from "./quotation-details-table";

type QuotationDetailsProps = {
  quotation: IQuotation;
};

export const QuotationDetails: FC<QuotationDetailsProps> = ({ quotation }) => {
  const discount = quotation.items.reduce((dis, item) => {
    return dis + Number(item.discount);
  }, 0);
  const subtotal = quotation.items.reduce((acc, item) => {
    return acc + Number(item.totalAmount);
  }, 0);
  const totalAmount = subtotal - discount;
  const VATpercents = 5;
  const netAmount = totalAmount + totalAmount * (VATpercents / 100);
  return (
    <div className="flex flex-col gap-5">
      <QuotationDetailsHeader quotation={quotation} />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-[minmax(200px,500px)_repeat(3,1fr)]">
          <div className="grid grid-cols-2 gap-x-2">
            <p className="font-bold">Bill To</p>
            <p className="justify-self-start">{quotation.clientName}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Tax ID:</p>
            <p className="justify-self-start">{quotation.taxId}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Bill to phone:</p>
            <p className="justify-self-start">{quotation.clientPhoneNumber}</p>
          </div>
          <div className="grid gap-x-2 grid-cols-2 ">
            <p className="justify-self-end font-bold">Bill to email:</p>
            <p className="justify-self-start">{quotation.clientEmail}</p>
          </div>
        </div>
        <div className="  grid grid-cols-[minmax(200px,500px)_repeat(3,1fr)]">
          <div className="grid grid-cols-2 gap-x-2">
            <div className=" flex justify-between">
              <p className=" font-bold">Billing Address</p>
              <p className="font-bold">Street 1:</p>
            </div>
            <p className="justify-self-start ">{quotation.billToAddress.street1}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">District:</p>
            <p className="justify-self-start">{quotation.billToAddress.district}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Postal Code:</p>
            <p className="justify-self-start">{quotation.billToAddress.postalCode}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Brand Code:</p>
            <p className="justify-self-start">{quotation.billToAddress.branchCode}</p>
          </div>
        </div>
        <div className="  grid grid-cols-[minmax(200px,500px)_repeat(3,1fr)]">
          <div className="grid grid-cols-2 gap-x-2">
            <p className="font-bold justify-self-end">Street 2:</p>
            <p className="justify-self-start">{quotation.billToAddress.street2}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2 ">
            <p className="justify-self-end font-bold">Province/State:</p>
            <p className="justify-self-start">{quotation.billToAddress.postalCode}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Country:</p>
            <p className="justify-self-start">{quotation.billToAddress.country}</p>
          </div>

        </div>
        <hr className="mt-2 h-0.5 bg-black" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-[minmax(200px,500px)_repeat(3,1fr)]">
          <div className="grid grid-cols-2 ">
            <p className="font-bold">Ship To</p>
            <p className="justify-self-start">{quotation.clientName}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Shipping Contact:</p>
            <p className="justify-self-start">{quotation.clientPhoneNumber}</p>
          </div>
        </div>
        <div className=" grid grid-cols-[minmax(200px,500px)_repeat(3,1fr)]">
          <div className="grid grid-cols-2 gap-x-2">
            <div className="flex justify-between">
              <p className="font-bold">Shipping Address</p>
              <p className="font-bold">Street 1:</p>
            </div>
            <p>{quotation.shipToAddress.street1}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">District:</p>
            <p className="justify-self-start">{quotation.shipToAddress.district}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Postal Code:</p>
            <p className="justify-self-start">{quotation.shipToAddress.postalCode}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Brand Code:</p>
            <p className="justify-self-start">{quotation.shipToAddress.branchCode}</p>
          </div>
        </div>
        <div className="  grid grid-cols-[minmax(200px,500px)_repeat(3,1fr)]">
          <div className="grid grid-cols-2 gap-x-2">
            <p className="font-bold justify-self-end">Street 2:</p>
            <p className="justify-self-start">{quotation.shipToAddress.street2}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <p className="justify-self-end font-bold">Province/State:</p>
            <p className="justify-self-start">{quotation.shipToAddress.postalCode}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2 ">
            <p className="justify-self-end font-bold">Country:</p>
            <p className="justify-self-start">{quotation.shipToAddress.country}</p>
          </div>

        </div>
        <hr className="mt-2 h-0.5 bg-black" />
      </div>
      <div>
        <QuotationDetailsTable quotation={quotation} />
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex max-w-[30%] gap-5">
            <p className="">Note:</p>
            <Input className="h-20" />
          </div>
          <div className="w-full max-w-[25%] py-2">
            <div className="grid grid-cols-2 gap-x-2">
              <p className="justify-self-end font-bold">Subtotal:</p>
              <p className="justify-self-end">{subtotal} THB</p>
              <p className="justify-self-end font-bold">Discount:</p>
              <p className="justify-self-end">{discount} THB</p>
              <p className="justify-self-end font-bold">Total:</p>
              <p className="justify-self-end">{subtotal} THB</p>
              <p className="justify-self-end font-bold">VAT:</p>
              <div className="grid grid-cols-2 gap-x-2">
                <p className="text-center font-bold">{VATpercents} %</p>
                <p className="justify-self-end">{totalAmount * (VATpercents / 100)} THB</p>
              </div>
            </div>
            <hr className="mt-2 h-0.5 bg-black" />
            <div className="grid grid-cols-2">
              <p className="justify-self-end font-bold">Net Amount:</p>
              <p className="justify-self-end">{netAmount} THB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
