import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { FC } from "react";

type QuotationDetailsTableProps = {
  quotation: IQuotation;
};

export const QuotationDetailsTable: FC<QuotationDetailsTableProps> = ({ quotation }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Seq</TableHead>
            <TableHead>Materials</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>UOM</TableHead>
            <TableHead>UnitPrice</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Remark</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotation.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.productNo}</TableCell>
              <TableCell>{item.productDescription}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.UOM}</TableCell>
              <TableCell>{item.unitPrice}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.discount}</TableCell>
              <TableCell>{item.totalAmount}</TableCell>
              <TableHead></TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
