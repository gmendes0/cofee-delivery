import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Coffee Delivery</h1>
      <button>Coffee Delivery</button>
      <input type="text" />
      <textarea name=""></textarea>
      <select name="" id="">
        <option value="">Coffee Delivery</option>
      </select>
    </ThemeProvider>
  );
}

export default App;
