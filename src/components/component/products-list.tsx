import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { likeProduct } from "@/stores/rankingStore";
import { addToCart } from "@/stores/checkoutStore";
import { useRef } from "react";

export interface IProduct {
  id: number;
  alt: string;
  name: string;
  price: number;
  image: string;
}

interface Props {
  products: IProduct[];
}

function Product({ id, name, price, image, alt }: IProduct) {
  const inputAmountRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex items-start gap-4">
      <div className="grid gap-1 text-sm place-items-center	">
        <img
          alt={alt}
          className="aspect-square rounded-md object-cover"
          height="150"
          src={image}
          width="150"
        />
        <h1 className="font-semibold">{name}</h1>
        <div className="flex items-center gap-1">
          <div>Preço:</div>
          <div className="font-semibold">{`R$ ${price.toFixed(2)}`}</div>
        </div>
        <div className="flex items-center gap-1">
          <div>Quantidade:</div>
          <Input
            ref={inputAmountRef}
            className="w-16 h-8 border-gray-200 rounded-md dark:border-gray-800"
            defaultValue="1"
            type="number"
          />
        </div>
        <div className="flex gap-x-2">
          <Button className="p-0.5 px-2 rounded-full" onClick={() => likeProduct(id)}><Heart /></Button>
          <Button className="flex-1" onClick={() => addToCart({ idProduct: id, amount: Number(inputAmountRef.current?.value) })}>Adicionar ao Carrinho</Button>
        </div>
      </div>
    </div>
  )
}

export function ProductsList({ products }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl gap-16 px-4 py-6 mx-auto">
      {products.map(({ id, ...product }) => (
        <Product key={id} id={id} {...product} />
      ))}
    </div>
  )
}
