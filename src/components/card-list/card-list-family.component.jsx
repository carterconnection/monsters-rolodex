import React from 'react';

import { CardFamily } from '../card/card-family.component';

import './card-list.style.css';

export const CardListFamily = (props) => (
    
    <div className='card-list'>            
        {props.family.map(family => (
            <CardFamily key={family.id} family={family} />
        ))}    
    </div>
);