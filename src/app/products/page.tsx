import { ProductList } from "@/components/products/ProductList"

export default async function Page() {
  const products = await fetch("https://jsonplaceholder.typicode.com/posts",
    { cache: 'force-cache' }
  )
  const productList = await products.json()

  return (
    <div>
      <ProductList products={productList} />
    </div>
  )
}
