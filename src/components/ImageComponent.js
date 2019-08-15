import React from 'react';
import styled from 'styled-components';

const Images = styled.img`
    width: 75%;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
    0 10px 10px rgba(0,0,0,0.22);
    margin-bottom: 50px;
    height: auto;
    width: 90%;

    @media(min-width: 1200px){
        width: 60%;
    }
`;
function ImageComponent(props){

    return (
        <>
        <Images src={props.url} alt='' />
        </>
    )
}

export default ImageComponent;