
import './App.css';
import './css/createnote.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoApp from './pages/TodoApp';
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index path='/' element={<TodoApp/>}/>
      <Route  path='/tic-tac' element={<TicTacToe/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
