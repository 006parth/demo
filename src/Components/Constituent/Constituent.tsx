import React from 'react';
import { ConstituentProps } from '../../constants';
import './Constituent.css';
function Constituent(props: ConstituentProps) {

    return (
        <div className="constituents">
            <div className='card-consti'>
                <div className='card-header'>{props.data.name}</div>
                <div className='card-body'>

                    <p>Ticker: <b><span>{props.data.ticker}</span></b></p>
                    <p>Holding: <b><span>{props.data.holdingPercentage}</span></b></p>
                    <div className='score'><p className='scoreText'>{props.data.score}</p></div>
                </div>
            </div>
        </div>
    );
}

export default Constituent;
