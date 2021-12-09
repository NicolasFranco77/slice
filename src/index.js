import reactDom from "react-dom";
import App from "./App"
import { CartContextProvider } from "./context/CartContex";

//styles
import './index.css'

reactDom.render(

<CartContextProvider>
<App />
</CartContextProvider>


, document.getElementById("root"));
