import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle, { COLORS } from "./styles/global.ts";
import { AuthProvider } from "./context/authenticationContext.tsx";
import { BrowserRouter } from "react-router-dom";
const theme = {
  colors: COLORS,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ChakraProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
