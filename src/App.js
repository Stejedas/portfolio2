import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import PortolioPage from "./Pages/PortfolioPage/PortolioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/portfolio" element={<PortolioPage></PortolioPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
