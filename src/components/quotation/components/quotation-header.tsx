import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { IQuotation } from '../quotation.type';

type QuotationHeaderProps = {
  quotation: IQuotation;
}
export const QuotationHeader: FC<QuotationHeaderProps> = ({ quotation }) => {
  return (
    <div className='grid grid-cols-3'>
      <p>Quotation number: {quotation.id}</p>
      <p>Quotation Date: {quotation.date}</p>
      <div className='flex gap-5'>
        <Button>Print</Button>
        <Button>Send</Button>
        <Button>Convert to Sale Order</Button>
        <Button>Close</Button>
      </div>
    </div>
  )
}
