import { useCheckoutStore } from "@/stores/checkoutStore";
import { useProductsStore } from "@/stores/productsStore";

interface CheckoutItem {
  idProduct: number;
  amount: number;
}

function CheckoutListItem({ idProduct, amount }: CheckoutItem) {
    const products = useProductsStore((state) => state.fullList)
    const product = products.find((product) => product.id === idProduct);

    if (!product) {
      return <div>Produto não encontrado</div>
    }
  
    const { name, price, image } = product
    const totalPrice = (price * amount).toFixed(2)

    return (
        <div className="flex items-start gap-4">
            <img
                alt="Thumbnail"
                className="aspect-square rounded-md object-cover"
                height="100"
                src={image}
                width="100"
            />
            <div className="grid gap-1.5">
                <h2 className="font-semibold text-base sm:text-xl">{name}</h2>
                <p className="text-sm leading-none md:text-base">Preço: R$ {price.toFixed(2)}</p>
                <p className="text-sm leading-none md:text-base">Preço total: R$ {totalPrice}</p>
            </div>
        </div>
    )
}

export function CheckoutList() {
    const items = useCheckoutStore()

    return (
        <div className="md:col-span-2 grid gap-4">
            <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <CheckoutListItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
