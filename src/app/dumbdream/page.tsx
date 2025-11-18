import { ItemList } from '@/components/dumbdream/ItemList';
import { createClient } from '@/prismicio';

type Props = {
  params: Promise<{ slug: string }>;
};
export const revalidate = 100;


export default async function DumbDream() {
  const client = createClient();
  const items = await client.getAllByType("fashionitem");
  return (
    <ItemList dumbDreamItems={items} />
  )

}
