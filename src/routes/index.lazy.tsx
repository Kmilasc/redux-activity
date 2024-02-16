// import { ProductsList } from '@/components/component/products-list';
import { ProductsList } from '@/components/component/products-list';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useGetProductsQuery } from '@/services/reqresApi';
import { applyFilter, useProductsStore } from '@/stores/productsStore';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  useGetProductsQuery(null)
  const { products, currentFilter } = useProductsStore((state) => ({ products: state.filteredList, currentFilter: state.currentFilter }))

  return (
    <section className="grid lg:grid-cols-[240px_1fr] items-start gap-6 lg:gap-10 px-4 md:px-6 py-6 lg:py-10">
      <div className="flex flex-col gap-4 items-start">
        <RadioGroup defaultValue={currentFilter} onValueChange={applyFilter}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="r1" />
            <Label htmlFor="r1">Todas</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="eletronics" id="r2" />
            <Label htmlFor="r2">Eletronicos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="outfit" id="r3" />
            <Label htmlFor="r3">Moda</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gear" id="r4" />
            <Label htmlFor="r4">Ferramentas</Label>
          </div>
        </RadioGroup>
      </div>
      <ProductsList products={products} />
    </section>
  )
}