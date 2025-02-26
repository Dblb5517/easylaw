import "./App.css";
import Main from "./main/Main";
import Info from "./info/Info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoInside from "./infoInside/InfoInside";
import ChatBox from "./chatBox/ChatBox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Routes>
          <Route index path="/" element={<Info />} />
          <Route path="/easylaw" element={<Info />} />
          <Route path="/inside/:page" element={<InfoInside />} />
        </Routes>
      </BrowserRouter>
      <ChatBox />
    </div>
  );
}

export default App;
