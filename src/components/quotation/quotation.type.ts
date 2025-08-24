export type Address = {
  street1: string;
  street2?: string;
  district: string;
  province: string;
  postalCode: string;
  country: string;
  branchCode?: string;
};

export type IQuotation = {
  id: string;
  number: number;
  date: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  taxId: string;
  billToAddress: Address;
  shipToAddress: Address;
};
