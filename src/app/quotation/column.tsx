"use client";
import { ColumnDef } from "@tanstack/react-table";
export type IOrderDetails = {
  productNo: string
  productDescription: string
  quantity: number
  UOM: string
  unitPrice: string
  amount: string
  discount: string
  totalAmount: string
}

export const columns: ColumnDef<IOrderDetails>[] = [
  {
    id: "No",
    header: "Seq",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "productNo",
    header: "ProductNo",
  },
  {
    accessorKey: "productDescription",
    header: "Product Description"
  },
  {
    accessorKey: "quantity",
    header: "quantity",
  },
  {
    accessorKey: "UOM",
    header: "UOM",
  },
  {
    accessorKey: "unitPrice",
    header: "unitPrice",
  },
  {
    accessorKey: "amount",
    header: "amount",
  }, {
    accessorKey: "discount",
    header: "discount",
  }, {
    accessorKey: "totalAmount",
    header: "totalAmount",
  },
];
