import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import React from "react";
import { Details } from "./pages/Details";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Details />
        </ThemeProvider>
    </React.StrictMode>
);
