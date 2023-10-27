import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variants="primary"/>
      <Button variants="secondary"/>
      <Button variants="danger"/>
      <Button variants="success"/>
      <Button />



      <GlobalStyle />
    </ThemeProvider>
  )
}
