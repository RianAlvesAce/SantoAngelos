import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home.tsx'
import News from './routes/News.tsx'
import Contact from './routes/Contact.tsx'
import About from './routes/About.tsx'
import Project from './routes/Project.tsx'

const router = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'novidades',
        element: <News />
      },
      {
        path: 'contato',
        element: <Contact />
      },
      {
        path: 'sobre',
        element: <About />
      },
      {
        path: 'projeto/:id',
        element: <Project />
      }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)