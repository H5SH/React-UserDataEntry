import MainForm from './Screens/MainForm';
import ListOfUser from './Screens/ListOfUser';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from './Screens/Details';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      
     </Routes>
     <Routes>
     <Route path="*" 
      element={
        <>
      <NavBar />
      <Routes>
        <Route index element={<MainForm />} />
        <Route exact path='/List-of-User' element={<ListOfUser/>} />
        <Route exact path='/Details' element={<Details />} />
      </Routes>
      </>} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
