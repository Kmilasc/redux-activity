import { reqresApi, useLoginMutation } from '@/services/reqresApi'
import { createRootRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { Package2Icon, ShoppingCartIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const Route = createRootRoute({
  component: () => {
    const navigate = useNavigate()
    const [, {
      data,
    }] = useLoginMutation({ fixedCacheKey: 'login' })
    const dispatch = useDispatch()

    useEffect(() => {
      navigate({
        to: data ? '/' : '/login'
      })
    }, [data])

    return(
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 border-b px-6 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex items-center gap-2" onClick={()=>navigate({
                  to: '/'
                })}>
          <Package2Icon className="h-6 w-6" />
          <span className="text-xl font-semibold">Galeria de Produtos</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 lg:gap-6">
          {!data && <div className="font-medium text-sm tracking-wide hover:underline dark:hover:underline" onClick={()=>navigate({
                  to: '/login'
                })}>
            Login
          </div>}
          {!!data && <>
          <div className="font-medium text-sm tracking-wide hover:underline dark:hover:underline" onClick={()=>navigate({
                  to: '/ranking'
                })}>
            Ranking
          </div>
          <div className="font-medium text-sm tracking-wide hover:underline dark:hover:underline" onClick={()=>{
              dispatch(reqresApi.util.resetApiState())
          }}>
            Sair
          </div>
          <div className='rounded-lg p-2 hover:bg-gray-900 dark:hover:bg-gray-50 group' onClick={()=> navigate({
                  to: '/checkout'
                })}>
            <ShoppingCartIcon className="w-5 h-5 group-[:hover]:stroke-white" />
            <span className="sr-only">Carrinho</span>
          </div>
          </>
          }
        </nav>
      </header>
      <Outlet />
    </div>
  )},
})
