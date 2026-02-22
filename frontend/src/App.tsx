// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AuthPage from "./pages/AuthPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import { ProtectedRoute } from "./components/auth/Protected";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/how-it-works", element: <HowItWorksPage /> },
        { path: "/auth", element: <AuthPage /> },
        // {
        //   path: "/onboarding",
        //   element: (
        //     <ProtectedRoute>
        //       <OnBoardingPage />
        //     </ProtectedRoute>
        //   ),
        // },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
      ],
    },

    {
      path: "/onboarding",
      element: (
        <ProtectedRoute>
          <OnBoardingPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      {/* <p>Assessment-first exam preparation.</p> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
