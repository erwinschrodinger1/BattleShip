import "./App.css";
import Board from "./components/Board/views";
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./components/LoginPage/views";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/board/:id" element={<Board/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      </ Routes>
    </div>
  );
}

export default App;
