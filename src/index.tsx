// node_modules
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./store/auth-context";
import store from "./store";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider: any) {
    return new Web3(provider)
}

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Web3ReactProvider getLibrary={getLibrary}>
                        <App />
                    </Web3ReactProvider>
                </BrowserRouter>
            </Provider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
