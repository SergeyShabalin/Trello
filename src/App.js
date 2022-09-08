import {Routes, Route} from 'react-router-dom'
import UiKit from "./components/basic/UiKit";
import Main from "./app/main/Index";
import './App.css';



function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/ui" element={<UiKit/>}/>
        </Routes>
    );
}

export default App;
