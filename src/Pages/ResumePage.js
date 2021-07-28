import React from 'react'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layout';

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
