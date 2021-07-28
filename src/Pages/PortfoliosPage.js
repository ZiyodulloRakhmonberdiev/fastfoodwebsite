import React, {useState} from 'react'
import {MainLayout, InnerLayout} from '../styles/Layout';
import Title from '../Components/Title';
import Menu from '../Components/Menu';
import Button from '../Components/Button';
import portfolios from '../data/portfolios'
import styled from 'styled-components';
 
const allButtons = ['All',   ...new Set(portfolios.map(item => item.category)), 'Full Stact']
function PortfoliosPage() {
    const [menuItem, setMenuItem] = useState(portfolios);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {
    if(button === 'All'){
        setMenuItem(portfolios)
        return;
    }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData);
    } 
    return (
        <MainLayout>
            <Title title="portfolios" span={'portfolios'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} className="menu" />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
