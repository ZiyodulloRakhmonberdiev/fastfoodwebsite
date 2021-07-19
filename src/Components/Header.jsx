import React from 'react'
 
function Header() {
    return (
        <div id='main'>
           <div className='header-heading'>
             <h3>It's great time for a good taste of Burger</h3>
             <h1><span>BURGER</span> FOR <br/> WEEK</h1>
             <p className='details'>Search for the keywords to learn more about each warning</p>
             <div className="header-btns">
                <a href="#" className='header-btn'>ORDER</a>
             </div>
           </div>
        </div>
    )
}

export default Header
