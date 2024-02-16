import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Provider as ProviderForHooks } from "hooks-for-redux";
import '@/globals.css'
import { routeTree } from './routeTree.gen'
import { store } from './stores/store';
import { Provider } from 'react-redux';

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Provider store={store}>
        {/* @ts-expect-error */}
        <ProviderForHooks>
          <RouterProvider router={router} />
        </ProviderForHooks>
      </Provider>
    </StrictMode>,
  )
}