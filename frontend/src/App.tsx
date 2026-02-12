// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import HowItWorksPage from "./pages/HowItWorksPage"
import AuthPage from "./pages/AuthPage"


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      errorElement:<ErrorPage />,
      children:[
        {path:"/",element:<HomePage />},
        {path:"/about",element:<AboutPage />},
        {path:"/how-it-works",element:<HowItWorksPage />},
        {path:"/auth",element:<AuthPage />}
      ]
    }
  ])

  return (
    <> 
      {/* <p>Assessment-first exam preparation.</p> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
