type IQuotationItem = {
  id: number;
  productNo: string;
  productDescription: string;
  quantity: number;
  UOM: string;
  unitPrice: string;
  amount: string;
  discount: string;
  totalAmount: string;
};

type IAddress = {
  street1: string;
  street2?: string;
  district: string;
  province: string;
  postalCode: string;
  country: string;
  branchCode: string;
};

type IQuotation = {
  id: string;
  title: string;
  clientName: string;
  clientPhoneNumber: string;
  clientEmail: string;
  taxId: string;
  status: string;
  amount: number;
  currency: string;
  createdAt: string;
  expiredAt: string;
  validUntil: string;
  description: string;
  billToAddress: IAddress;
  shipToAddress: IAddress;
  items: IQuotationItem[];
};
