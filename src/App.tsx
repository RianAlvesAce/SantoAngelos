import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ActualRouteProvider } from './context/ActualPageContext'

function App() {

  return (
    <div className='h-screen'>
      <p>cu</p>
      <ActualRouteProvider>
        <Header />
        <Outlet />
        <Footer />
      </ActualRouteProvider>
    </div>
  )
}

export default App
