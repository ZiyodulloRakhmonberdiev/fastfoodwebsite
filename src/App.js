import React, {useState, useEffect} from "react";
import ReactDom from 'react-dom';
import './index.css';
import styled from 'styled-components'
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogsPage from "./Pages/BlogsPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactsPage from "./Pages/ContactsPage";
import {Switch, Route} from 'react-router'


function App() {


  return (
      <div className="App">
        <Sidebar />
        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>         
            <div className="line-2"></div>         
            <div className="line-3"></div>         
            <div className="line-4"></div>         
          </div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/resume" exact>
              <ResumePage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage  />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactsPage />
            </Route>
          </Switch>
          
        </MainContentStyled>
      </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 12.3rem;
  min-height: 100vh;


  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -5;
    opacity: 0.3;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;   