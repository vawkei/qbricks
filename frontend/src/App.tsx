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
import PhaseOnePage from "./pages/PhaseOnePage";
import TestListPage from "./pages/TestListPage";
import PreTestScreenPage from "./pages/PreTestScreenPage";
import StartPage from "./pages/StartPage";

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
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/phase-one",
          element: (
            <ProtectedRoute>
              <PhaseOnePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/phase-one/:id",
          element: (
            <ProtectedRoute>
              <TestListPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/phase-one/:id/:testId",
          element: (
            <ProtectedRoute>
              <PreTestScreenPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard/phase-one/:id/:testId/start",
          element: (
            <ProtectedRoute>
              <StartPage />
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

// /dashboard/phase-one/:subject
//     → Subject Test List (10 tests, demo + paid)

// /dashboard/phase-one/:subject/:testId
//     → Pre-Test Screen (Voice / Written)

// /dashboard/phase-one/:subject/:testId/start
//     → Actual Test Screen

//Build a Fake Question Engine
//Just create something like:

// 🏗️ What The Written Mode Page Must Handle

// Before worrying about real content, your engine must support:

// Display question

// Display 4 options

// Select one option

// Next button

// Previous button (optional)

// Question counter (1 / 60)

// Submit test

// Calculate score

// Navigate to result page

// That’s the real work.
