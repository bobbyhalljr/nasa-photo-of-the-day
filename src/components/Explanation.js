import React from 'react';
import styled from 'styled-components';

const Sentence = styled.p`
    font-size: 22px
    width: 80%;
    line-height: 1.6;
`;

const WrapperDivCenter = styled.div`
    display: flex;
    align-content: center;
    justify-content: center; 
    width: 100%; 
`;

function Explanation(props) {

    return (
        <>
        <WrapperDivCenter>
            <Sentence> {props.explanation} </Sentence>
        </WrapperDivCenter>
        </>
    )
}

export default Explanation;