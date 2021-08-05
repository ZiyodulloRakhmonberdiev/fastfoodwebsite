import React from 'react';
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout} from '../styles/Layout'
import PrimaryButton from '../Components/PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
function ContactsPage() {
    const phone = <PhoneIcon /> 
    const address = <LocationOnIcon /> 
    const email = <EmailIcon /> 
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactsPageStyled>
                <InnerLayout className="contact-section">
                    <div className="left-content">
                        <h4> Get In Touch</h4>
                        <form>
                            <div className="form-field">
                                <label htmlFor="name" > Enter Your Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" > Enter Your Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" > Enter Your Subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="textarea" > Enter Your Message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10" />
                            </div>
                            <div className="form-field">
                                <PrimaryButton  title={"SEND MESSAGE"}/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem  icon={phone} title={'Phone'} contact={'+99891 670 67 80'} />
                        <ContactItem  icon={email} title={'Email'} contact={'@ziyodillo808@ gmail.com'} />
                        <ContactItem  icon={address} title={'Address'} contact={'Anorzor 1, Margilan city, Ferghana, Uzbekistan'} />
                    </div>
                </InnerLayout>
            </ContactsPageStyled>
            
        </MainLayout>
    )
}

const ContactsPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
        }
      
        .right-content{
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 650px){
                width: 94%;

            }
        }
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
       .left-content{
           h4{
               padding: 1rem 0;
               font-size: 1.8rem;
               color: var(--white-color);
           }
        .form-field{
            margin-top: 2rem;
            position: relative;
            width: 100%;
            @media screen and (max-width: 650px){
                width: 100%;
            }
            label{
                position: absolute;
                top: -1.1rem;
                left: 1rem;
                background-color: var(--background-dark-color);
                padding:  0  7px;
            }
            input{
                border: 1px solid var(--border-color);
                height: 1.5rem;
                outline: none;
                font-size: 1rem;
                background-color: transparent ;
                color: inherit;
                padding: 1.5rem 1rem;
                width: 100%;
            }
            textarea{
                font-size: 1rem;
                border: 1px solid var(--border-color);
                outline: none;
                background-color: transparent ;
                color: inherit;
                padding: 1.5rem 1rem;
                width: 100%;
                resize: none;
            }
        }
       }
    }

`;
export default ContactsPage
