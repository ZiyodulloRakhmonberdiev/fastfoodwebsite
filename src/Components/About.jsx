import React from 'react'
import aboutimage from '../images/about.png'
function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1> UPCOMMING EVENT </h1>
                <p>
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.   
                </p>
                <button> Read More </button>

            </div>
            <div className="about-image">
                <img src={aboutimage} alt=" " />
            </div> 
        </div>
    )
}

export default About
