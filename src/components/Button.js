import React, { useEffect } from 'react';
import styled from 'styled-components';

const ShowExButton = styled.button`
    background: dodgerblue;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
`;

function Button(){
    
    return (
        <>
        <ShowExButton>
            Show Explanation
        </ShowExButton>
        </>
    )
}

export default Button;