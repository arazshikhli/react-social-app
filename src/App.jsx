import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {

  return (
      <div className='app-wrapper'>
          <Header/>
          <div className='main'>
              <NavBar/>
              <Profile/>
          </div>
          <Footer/>
      </div>

  );
}

export default App;
