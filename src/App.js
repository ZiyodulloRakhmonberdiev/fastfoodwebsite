import React, {useState, useEffect} from "react";
import ReactDom from 'react-dom';
import './index.css';
import { css } from '@emotion/react'
import  PropagateLoader  from "react-spinners/PropagateLoader";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%; 
  `;
 
  useEffect(() =>{
    setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 2000)
  }, [])
  return (
      <div className="App">
      {
      loading ? <PropagateLoader css={override} color={"#3d2514"} loading={loading} size={40} /> :
      <>
        <Navbar />
        <Header />
        <Products />  
        <About />  
        <Contact />  

      </>
      }
      </div>
  );
}

export default App;   