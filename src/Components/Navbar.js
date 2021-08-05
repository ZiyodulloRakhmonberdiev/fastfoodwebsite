import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';



class Navbar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <NavbarStyled>
                <nav className="navbar">
                <div className="nav-center">             
                    <div className="nav-header">
                        <button 
                            className="nav-btn" 
                            type="button"
                            onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul id="ul" className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li id="li">
                            <NavLink to="/home" activeClassName="active-class">Home</NavLink>                
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active-class">About</NavLink>                    
                        </li>
                        <li>
                            <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>                    
                        </li>
                        <li>
                            <NavLink to="/portfolios" activeClassName="active-class">Portfolios   </NavLink>                    
                        </li>
                        <li>
                            <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>                    
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>                    
                        </li>
                    </ul>
                </div>
            </nav>
            </NavbarStyled>
            
               
        )
    }
}

const NavbarStyled = styled.div`
 .active-class{
    background-color: var(--background-light-color-2);
    color: var(--white-color );
  }
  .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  padding: 0.75rem 2rem;
  background: var(--background-dark-color);
  z-index: 1;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
  top: -100%;
  transition: .5s ease;
}
@media screen and (max-width: 1200px){
  .navbar{
    top: 0;
    padding-left: 6rem;
  }
}
@media screen and (max-width: 768px){
  .navbar{
   padding-left: 1rem;
  }
  .nav-links a{
    padding: 0 .5rem;
    margin-left: 0;
  }
}
@media screen and (max-width: 576px){
  .navbar{
    padding-left: 1rem;
  }
}
.nav-header {
  display: flex;
  justify-content: center ;
  background-color: var(---background-dark-color);
}
.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
 
}
.nav-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
}
.nav-links {
  height: 0;
  overflow: hidden;
  transition: .5s ease;
  list-style-type: none;
  display: flex;
}
.nav-links a {
  display: block;
  padding: .7rem 0;
  color: var(--font-light-color);
  transition: .5s ease;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing:1px;
  text-align: center;
}
.nav-links a::before{
  content: " ";
  background-color: var(--primary-color);
  position: absolute;
  width: 0px;
  height: 50%;
  bottom: 0;
  left: 0;
  opacity: 0.21;
  transition: All .4s cubic-bezier(1,-0.2,.39,.95);
}
.nav-links a:hover {
  color: var(--primary-color);
}
.nav-links a:hover::before {
  width: 100%;
  height: 100%;
}
.show-nav {
  height: 100%;
}
@media screen and (min-width: 768px) {
  .nav-btn {
    display: none;
  }
  .nav-center {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }
  .nav-links {
    height: auto;
    display: flex;
    margin-left: 4rem;
  }
  .nav-links a {
    margin: 0 .5rem;
    padding: 0.5rem 1rem;
  }
}
@media screen and (max-width: 575px) {
  .navbar{
    display: flex;
    height: auto;
    width: 100%;
    position: relative;
    padding-bottom: 40px;
    
  }
  .nav-btn {
    display: flex;
    justify-self: flex-end;
    position: absolute;
    right: 15px;
    
  }
  .nav-center {
    width: 100%;
    margin: 0 auto;
    display: flex;
    height: auto;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .nav-center #ul{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .nav-center #ul #li{
    width: 100%;
    display: block;
  }
  .nav-links a {
    margin: 0 .5rem;
    padding: 0.5rem .5rem;
  }
}
`
export default Navbar