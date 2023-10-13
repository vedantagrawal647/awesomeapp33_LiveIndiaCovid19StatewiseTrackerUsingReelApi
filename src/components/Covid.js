import React,{useEffect,useState} from "react";
import "./covid.css"

const Covid = () => {
    const [data ,setData]=useState([]); 
    const  getCovidData=async()=>{ 
       try
       {
            const resp= await fetch("https://data.covid19india.org/data.json");
            const actualData = await resp.json(); //it also return promise function
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
       }
       catch(err){
            console.log(err);
            
       }
    }
    useEffect(()=>{
        getCovidData();
    },[]);

    //remember when we use "fetch api" ,it return a promise 
    //promises means either data will we rejected or fullfill
    //useEffect() is used when when we refresh our page it call all the thing that we write inside it
    //[] represent useEffect call the all thing that right inside it only firsttime refresh of page

    


    return (
        <>
                <div className="heading">
                    <h1 className="heading1"><span>🔴</span> Live</h1>
                    <h2 className="heading2"> COVID-19 CORONAVIRUS TRACKER</h2>
                </div>
                <div className="card">
                        <div className="card_inner card_inner1">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_total card_small">INDIA</p>
                        </div>
                        <div className="card_inner card_inner2">
                            <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                        <div className="card_inner card_inner3">
                            <p className="card_name"><span>CONFIRMED</span> CONFIRMED</p>
                            <p className="card_total card_small">{data.confirmed}</p>
                        </div>
                        <div className="card_inner card_inner4">
                            <p className="card_name"><span>TOTAL</span> DEATH</p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                        <div className="card_inner card_inner5">
                            <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                        <div className="card_inner card_inner6">
                            <p className="card_name"><span>TOTAL</span> UPDATE</p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                </div>
        </>
    );
}
export default Covid;