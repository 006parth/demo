import React from 'react';
import { FundProps } from '../../constants';
import './FundDetail.css'
function FundDetail(props: FundProps) {
    return (
        <div className="fund-detail">
            <div className='card'>
                <p><b>{props?.data?.name}</b></p>
                <p>Impact Score: <b>{props?.data?.impactScore}</b></p>
                <p>Previous Share Price: <b>{props?.data?.previousSharePrice}</b></p>
                <p>Market Capitalization: <b>{props?.data?.marketCapitalization}</b></p>
                <p>Ticker: <b>{props?.data?.ticker}</b> </p>
            </div>
        </div>
    );
}

export default FundDetail;
