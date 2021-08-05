import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 5rem;
    
    @media screen and (max-width: 992px){
        padding: 4rem;
    }
    @media screen and (max-width: 650px){
        padding: 3rem;
    }
    @media screen and (max-width: 360px){
        padding: 2rem;
    }
`;
export const InnerLayout = styled.div`
    padding: 5rem 0;
`;
