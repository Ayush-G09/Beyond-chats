import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import { generateTheme } from "./theme";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const currentTheme = generateTheme(theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <Root>
        <RouterProvider router={router} />
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export default App;
