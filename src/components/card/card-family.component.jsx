import React from 'react';

import '../card/card.style.css';

export const CardFamily = (props) => (
    <div className="card-container">
        <img 
            alt="monster" 
            src={`https://robohash.org/${props.family.name}?&size=180x180`}
        />
        <h1> {props.family.name} </h1>        
    </div>
)