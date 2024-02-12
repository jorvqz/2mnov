import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import LoveMessage from "./pages/LoveMessage.js";
import ShowLoveMessage from "./pages/ShowLoveMessage.js";




function App() {

  return <>
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<MainPage/>}/>
      <Route path ="/2MNov" element={<LoveMessage/>}/>
      <Route path ="/2MNov/show" element={<ShowLoveMessage/>}/>
    </Routes>
  </BrowserRouter>

  </>
}

export default App;
