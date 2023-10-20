import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle, { COLORS } from "./styles/global.ts";
const theme = {
  colors: COLORS,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
