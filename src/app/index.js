import React from "react";
import { Routes, Route } from "react-router-dom";
import UiKit from "../components/basic/UiKit";
import Main from "./main";
import Modal from "../components/basic/Modal";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="card/:cardId" element={<Modal/>} />
      </Route>
      <Route path="/ui" element={<UiKit />} />
    </Routes>
  );
}

export default App;






