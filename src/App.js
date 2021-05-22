import React, { useEffect, useState } from "react";
import './App.css';
import BarChart from "./components/barChart";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                const { bpi } = resp;
                const result = [];
                for(let key in bpi) {
                   result.push({date: key, value: bpi[key]});
                }
                setData(result);
            });
    }, []);
    return (
        <div className="App">
            <div className="barContainer">
                <BarChart marginBetweenBars={5} barWidth={20} data={data} />
            </div>

        </div>
    );
}

export default App;
