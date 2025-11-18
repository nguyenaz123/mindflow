import { QuotationDetails } from "@/components/quotation-details/quotation-details";
import { mockQuotation } from "@/components/quotation/mockQuotation";



export default function Quotation() {
  return (
    <div className=" max-w-full mt-20 px-10 mx-auto">
      {/* <QuotationManagement quotation={quotation} data={orderDetails} /> */}
      <hr className="h-3" />
      <br />
      <QuotationDetails quotation={mockQuotation} />

    </div>
  )
}
