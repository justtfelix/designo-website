import React from "react";
import { ThemeProvider } from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { defaultTheme } from "./theme/defaultTheme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
// Importing Components
import { GlobalStyles } from "./assets";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <HelmetProvider>
        <GlobalStyles />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
