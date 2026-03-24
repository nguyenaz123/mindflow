import { FC } from "react";

type Props = {
  products: any[];
}
export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-y-5">
      {products.map((product: any, index) => (
        <div key={index} className="text-white text-2xl">
          <p>{product.title}</p>
        </div>
      ))}

    </div>
  )
}
