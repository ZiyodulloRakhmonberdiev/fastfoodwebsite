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
import {Switch as Switching, Route} from 'react-router';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium'; 
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import Navigation from "./Components/Navigation";


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false)
 useEffect(()=> {
  document.documentElement.className = theme; 
 },[theme])
 
 const themeToggler = () => {
   if(theme === 'light-theme'){
     setTheme('dark-theme')
     setChecked(false)
   }else{
    setTheme('light-theme')
    setChecked(true)
   }
 }
  return (
    
      <div className="App">

        <Sidebar  navToggle={navToggle} />
        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>         
            <div className="line-2"></div>         
            <div className="line-3"></div>         
            <div className="line-4"></div>         
          </div>

          <div className="menu-icon" >
            <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className="theme">
            <div className="left">
              <BrightnessMediumIcon />
            </div>
            <div className="right">
              <Switch
              // value=''
              ariaProps={{'aria-label': ''}}
              checked={checked}
              onClick={themeToggler}
              >

              </Switch>
            </div>
          </div>
          <Switching>
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
          </Switching>
          
        </MainContentStyled>
      </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 12.3rem;
  min-height: 100vh;
  

  .theme  {
    position: fixed;
    right: 0;
    top: 30%;
    /* width: 5rem; */
    height: 2rem;
    display: flex;
    background-color: var(--background-light-color-2);
    align-items: center;
    justify-content: space-between;   
    z-index: 15;
    padding: .5rem   1rem;
    border-radius: 1rem;
    @media screen and (max-width:360px){
      top:3%;
      right: 30%;
    }
    svg{
      display: flex;
      align-items: center;
    }
    
  }
  .menu-icon{
    position: fixed;
    right: 10%;
    svg{
      font-size: 3rem;
    }
  }
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
  @media screen and (max-width: 1200px){
        margin-left: 0;
        
    }
`;

export default App;   