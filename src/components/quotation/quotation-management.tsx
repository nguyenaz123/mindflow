import { columns, IOrderDetails } from "@/app/quotation/column"
import { FC } from 'react'
import { DataTable2 } from '../data-table/data-table2'
import { Input } from "../ui/input"
import { QuotationHeader } from './components/quotation-header'
import { IQuotation } from './quotation.type'

type QuotationManagementProps = {
  quotation: IQuotation;
  data: IOrderDetails[]

}
export const QuotationManagement: FC<QuotationManagementProps> = ({ quotation, data }) => {
  const discount = 0;
  const subtotal = data.reduce((acc, item) => {
    return acc + Number(item.totalAmount);
  }, 0);
  const totalAmount = subtotal - discount
  const VATpercents = 5
  const netAmount = totalAmount + (totalAmount * (VATpercents / 100))
  return (
    <div className="text-sm">
      <div>
        <QuotationHeader quotation={quotation} />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-4 mt-4'>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-start">Quotation to:</p>
            <p className="justify-self-end"> {quotation.clientName}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Phone:</p>
            <p className="justify-self-start">{quotation.clientPhone}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Email:  </p>
            <p className="justify-self-start">{quotation.clientEmail}</p>
          </div>
        </div>
        <hr className='mt-5 h-1' />
        <div className="grid grid-cols-4">
          <div className="grid grid-cols-2">
            <p className="justify-self-start">Bill address:</p>
            <p className="justify-self-end"> {quotation.clientName}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Tax ID:</p>
            <p className="justify-self-start">{quotation.taxId}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Billing to phone:</p>
            <p className="justify-self-start">{quotation.clientPhone}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Email:  </p>
            <p className="justify-self-start">{quotation.clientEmail}</p>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex" >
            <p className="justify-self-start w-[35%]">Billing address:</p>
            <div className="grid flex-1" >
              <div className="flex">
                <p className="w-[25%]">Street 1:</p>
                <p className="flex-1 text-end"> {quotation.billToAddress.street1}</p>
              </div>
              <div className="flex">
                <p className="w-[25%]">Street 2:</p>
                <p className="flex-1 text-end"> {quotation.billToAddress.street1}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">District:</p>
            <p className="justify-self-start">{quotation.billToAddress.district}</p>
            <p className="justify-self-end">Province/State:</p>
            <p className="justify-self-start">{quotation.billToAddress.province}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Postal Code:</p>
            <p className="justify-self-start">{quotation.billToAddress.postalCode}</p>
            <p className="justify-self-end">Country:</p>
            <p className="justify-self-start">{quotation.billToAddress.country}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="justify-self-end">Email:  </p>
            <p className="justify-self-start">{quotation.billToAddress.postalCode}</p>
          </div>
        </div>
        <div>
          <p>Order Details</p>
          <DataTable2 columns={columns} data={data} />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5 max-w-[30%]">
            <p className="">Note:</p>
            <Input className="h-20" />
          </div>
          <div className="max-w-[30%] py-2 flex flex-col gap-2">
            <p><b>Subtotal:</b>  {subtotal} THB</p>
            <p><b>Discount:</b>  {discount} THB</p>
            <p><b>Total:</b> {subtotal} THB</p>
            <p><b>VAT:</b> {VATpercents} %</p>
            <hr />
            <p><b>Net Amount:</b> {netAmount} THB</p>
          </div>
        </div>

      </div>



    </div >
  )
}
