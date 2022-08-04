import axios from "axios";


export const getConstituents = () => {
    return axios.get("https://api.inspireinsight.com/api/tickers/1784/constituents?size=100");
}