import { QuotationManagement } from "@/components/quotation/quotation-management";
import { orderDetails } from "@/data/orders";


export const quotation =
{
  id: "Q-0001",
  number: 1001,
  date: "2025-08-24",
  clientName: "Mr. John Smith",
  clientPhone: "083-123-4567",
  clientEmail: "john.smith@example.com",
  taxId: "1234567890123",
  billToAddress: {
    street1: "123 Sukhumvit Road",
    street2: "Building A, Floor 10",
    district: "Khlong Toei",
    province: "Bangkok",
    postalCode: "10110",
    country: "Thailand",
    branchCode: "001",
  },
  shipToAddress: {
    street1: "456 Rama IV Road",
    street2: "Warehouse Zone 5",
    district: "Pathumwan",
    province: "Bangkok",
    postalCode: "10330",
    country: "Thailand",
    branchCode: "สำนักงานใหญ่",
  },
};
export default function Quotation() {
  return (
    <div className=" max-w-full mt-20 px-10 mx-auto">
      <QuotationManagement quotation={quotation} data={orderDetails} />

    </div>
  )
}
