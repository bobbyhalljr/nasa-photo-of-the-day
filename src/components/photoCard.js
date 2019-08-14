import React from 'react';

function PhotoCard(props) {
    console.log(props)
    return (
        <div>
            <h1> {props.title} </h1>
            <img src={props.url} />
            <p> {props.explaination} </p>
        </div>
    )
}

export default PhotoCard;