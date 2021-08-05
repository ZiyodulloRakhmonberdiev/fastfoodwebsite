import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root{
        --background-color: #000;
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121a;
        --background-dark-grey: #191d2b;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(3,127,255, .3);
        --border-color: #2e344e;
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
        --scrollbar-bg-color: #383838 ;
        --scrollbar-thump-color: #6b6b6b ;
        --scrollbar-track-color: #383838 ;
    }
    .light-theme{    
        --background-color: #ffffff;
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #f1f1f1;
        --background-dark-grey: #e4e4e4;    
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(3,127,255, .3);
        --border-color: #cbced8;
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #e4e4e4;
        --scrollbar-bg-color: #383838 ;
        --scrollbar-thump-color: #6b6b6b ;
        --scrollbar-track-color: #383838 ;
        --span-color: #f1f1f1;

    }
    .dark-theme{
        --background-color: #000;
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121a;
        --background-dark-grey: #191d2b;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(3,127,255, .3);
        --span-color: rgba(3,127,255, .3);
        --border-color: #2e344e;
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
        --scrollbar-bg-color: #383838 ;
        --scrollbar-thump-color: #6b6b6b ;
        --scrollbar-track-color: #383838 ;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }
    
    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color)
    }
    body::-webkit-scrollbar{
        width: 9px;
        background-color: #383838;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #6b6b6b;
    }
    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #383838;
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size: 1rem;
    }
    h1{
        font-size: 3rem;
        color: var(--white-color);
        span{
            font-size: 3rem;
            @media screen and(max-width: 500px){
                font-size: 2rem;
            }
        }
    }
    span{
        color: var(--primary-color);
    }
    p{
        font-size: 1rem;
    }
 
    .menu-icon{
        position: absolute;
        display: none;
        z-index: 15;
    }
    
    //Global Media Queries

`

export default GlobalStyle;