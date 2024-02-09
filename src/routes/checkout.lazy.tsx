import { CheckoutList } from "@/components/component/checkout-list";
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { useCheckoutStore } from "@/stores/checkoutStore";
import { useProductsStore } from "@/stores/productsStore";

import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/checkout')({
  component: Checkout,
})

function Checkout() {
  const items = useCheckoutStore()
  const products = useProductsStore((state) => state.fullList)
  const subtotal = items.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.idProduct);
    if (!product) {
      return acc
    }
    return acc + (product.price * item.amount)
  }, 0)
  const shipping = 15.21
  const total = subtotal + shipping

  return (
    <main className="flex-1 grid md:grid-cols-3 gap-6 p-4 md:gap-12 lg:p-8">
      <CheckoutList />
      <div className="md:col-span-1 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Resumo do carrinho</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <Button className="w-full">Finalizar compra</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
