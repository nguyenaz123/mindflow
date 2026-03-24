import { ItemDetail } from "@/components/dumbdream/ItemDetail";
import { createClient } from "@/prismicio";


type Props = {
  params: Promise<{ slug: string }>;
}
export default async function DumbDream({ params }: Props) {
  const {slug} = await params;
  const client = createClient();
  const item = await client.getByUID("fashionitem", slug);
  return (
      <ItemDetail item={item} />
    )
}