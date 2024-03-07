import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./header/Header";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <BrowserRouter>
      <Header />
      <App />
   </BrowserRouter>,
);
