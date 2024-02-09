import { useProductsStore } from "@/stores/productsStore";
import { useRankingStore } from "@/stores/rankingStore";
import { Heart } from "lucide-react";

interface RankingItem {
  idProduct: number;
  likes: number;
  rank: number;
}

function RankingItem({ idProduct, likes, rank }: RankingItem) {
  const products = useProductsStore((state) => state.fullList)
  const product = products.find((product) => product.id === idProduct);

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  const { name, price } = product

  return (
    <div className="flex items-center gap-4">
      <div className="text-2xl font-semibold">{rank}.</div>
      <div className="grid gap-1">
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="ml-auto grid items-start gap-1">
        <h3 className="font-semibold min-w-[70px]">R$ {price.toFixed(2)}</h3>
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">{likes}</span>
        </div>
      </div>
    </div>
  )
}

export function RankingList() {
  const items = useRankingStore((state) => state);

  return (
    <div className="flex flex-col gap-4">
      {items.sort((a, b) => b.likes - a.likes).map((item, index) => <RankingItem key={item.idProduct} rank={index + 1} {...item} />)}
    </div>
  )
}

