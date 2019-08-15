import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background: #d3d3d3;
    padding: 20px;
    display: flex;
    justify-content: flex-start;

`;

const heading2 = styled.h2`
    padding-left: 10px;
`;

function Header(){

    return (
        <>
        <Section>
            <heading2>Bobby Hall Jr presents: NASA Photo Of The Day</heading2>
        </Section>
        </>
    )
}

export default Header;