import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
