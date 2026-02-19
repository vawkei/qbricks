import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_Google_ClientId}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StrictMode>
          <App />
        </StrictMode>
      </Provider>
    </QueryClientProvider>
  </GoogleOAuthProvider>,
);
