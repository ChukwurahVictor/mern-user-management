import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserForm from './Components/UserForm';
import Home from './Components/Home';
import AppBar from "./Components/AppBar";

function App() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (

    <div className="App">
      <AppBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route exact path="/add" element={<UserForm open={open} handleOpen={handleOpen} handleClose={handleClose}/>}/>
          <Route exact path="/update/:id" element={<UserForm/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;