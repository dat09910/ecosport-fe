import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "~/components/GlobalStyles";
import { ContextProvider } from "~/contexts/ContextProvider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
      <ContextProvider>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </ContextProvider>
  // </React.StrictMode>
);
