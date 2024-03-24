import React from 'react';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './header/header';
import Banner from './banner/banner';
import Reasons from './reasons/reasons';
import Subscribe from './subscribe/subscribe';
import Footer from './footer/footer';
import Catalog from './catalog/catalog';
import Login from './login/login';
import Register from './register/register';
import CatalogPagination from './catalog/catalogPagination';
import CatalogScroll from './catalog/catalogScroll';
import CatalogWindow from './catalog/catalogWindow';
import Example from './example/example';


function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);

  const LazyLoadedCatalog = lazy(() => import('./catalog/catalogLazyLoad'));

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
      <Router basename={process.env.REACT_APP_URI}>
        <Route exact path="/">
          <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Banner />
          <Reasons />
          <Catalog />
          <Subscribe />
          <Footer />
          <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
          <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
        </Route>

        <Route path="/lazyload">
          <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Banner />
          <Reasons />
          <Suspense fallback={<div>Загрузка...</div>}>
            <LazyLoadedCatalog />
          </Suspense>
          <Subscribe />
          <Footer />
          <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
          <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
        </Route>

        <Route path="/pagination">
          <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Banner />
          <Reasons />
          <CatalogPagination />
          <Subscribe />
          <Footer />
          <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
          <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
        </Route>

        <Route path="/scroll">
          <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Banner />
          <Reasons />
          <CatalogScroll />
          <Subscribe />
          <Footer />
          <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
          <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
        </Route>

        <Route path="/virtualize">
          <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Banner />
          <Reasons />
          <CatalogWindow />
          <Subscribe />
          <Footer />
          <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
          <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
        </Route>

        <Route path="/example">
          <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
          <Banner />
          <Reasons />
          <Example />
          <Subscribe />
          <Footer />
          <Login onClose={closeAllPopups} isOpen={isLoginPopupOpen} />
          <Register onCLose={closeAllPopups} isOpen={isRegisterPopupOpen} />
        </Route>

      </Router>
    </>
  );
}

export default App;