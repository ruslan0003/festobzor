import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import Banner from './banner/banner';
import Reasons from './reasons/reasons';
import Subscribe from './subscribe/subscribe';
import Footer from './footer/footer';
import Catalog from './catalog/catalog';
import Login from './login/login';
import Register from './register/register';


function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function handleRegisterClick() {
    setIsRegisterPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
  }

  return (
    <>
      <Route path="/">
        <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick}/>
        <Banner />
        <Reasons />
        <Catalog />
        <Subscribe />
        <Footer />
        <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
        <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
      </Route>
    </>
  );
}

export default App;
