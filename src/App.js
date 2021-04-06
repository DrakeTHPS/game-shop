import './App.css';
import {BrowserRouter} from "react-router-dom";
import MainPage from "./components/main-page/main-page";

function App() {
    return (
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    );
}

export default App;
