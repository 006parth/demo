import React, { useEffect, useState } from 'react';
import { getConstituents } from './Api/Api';
import Constituent from './Components/Constituent/Constituent';
import FundDetail from './Components/FundDetail/FundDetail';
import './App.css';
import { FundData, ConstituentType } from './constants';


function App() {
    const [fundDetails, setFundDetails] = useState<FundData>()
    const [holdings, setHoldings] = useState<Array<ConstituentType>>([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getData();
    }, [])

    const getData = () => {
        getConstituents().then((res) => {
            console.log(res);
            setFundDetails(res.data.fund);
            setHoldings(res.data.holdings);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }
    return (
        <div className="App">
            {
                isLoading ? <h1>Loaidng....</h1> :
                    <div>
                        <h1>Fund Details</h1>
                        <FundDetail data={fundDetails}></FundDetail>
                        <h1>Holdings</h1>
                        <div className='row'>
                            {holdings.map((holding: ConstituentType, idx: number) => {
                                return <div key={idx} className='box'>
                                    <Constituent data={holding}></Constituent>
                                </div>
                            })}
                        </div>
                    </div>
            }
        </div>
    );
}

export default App;
