import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
function Sidebar({navToggle}) {
    return (
        <SidebarStyled className={`${ navToggle ? 'nav-toggle' : ''}`} >
            <Navigation  />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 12.3rem;
    height: 100vh;
    position: fixed;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: .4s;
    z-index: 16;
    @media screen and (max-width: 1200px){
        transform: translateX(-100%);
        z-index: 15;
    }
    @media screen and (max-width: 768px){
        z-index: 15;
        position: absolute;
    }
`
export default Sidebar
