import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { CartProvider } from "./contexts/CartContext";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />

      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
