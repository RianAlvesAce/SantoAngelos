import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ActualRouteProvider } from './context/ActualPageContext'

function App() {

  return (
    <div className='h-screen'>
      <ActualRouteProvider>
        <Header />
        <Outlet />
      </ActualRouteProvider>
      <Footer />
    </div>
  )
}

export default App
