import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './auth/context/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider value={{}}>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
