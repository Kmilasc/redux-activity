import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Package2Icon, ShoppingCartIcon } from 'lucide-react'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 border-b px-6 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">
        <Link className="flex items-center gap-2" href="/">
          <Package2Icon className="h-6 w-6" />
          <span className="text-xl font-semibold">Galeria de Produtos</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 lg:gap-6">
          <Link to="/ranking" className="font-medium text-sm tracking-wide hover:underline dark:hover:underline">
            Ranking
          </Link>
          <Link to="/checkout" className='rounded-lg p-2 hover:bg-gray-900 dark:hover:bg-gray-50 group'>
            <ShoppingCartIcon className="w-5 h-5 group-[:hover]:stroke-white" />
            <span className="sr-only">Carrinho</span>
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  ),
})
