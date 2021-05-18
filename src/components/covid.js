import React,{useEffect,useState} from 'react'
import './ui.css'

const Covid = () => {
    //for catch api call data
    const [data, setData] = useState([])

    

    // For API call
    useEffect(() => {
        return async()=>{
            try {
                const res = await fetch('https://api.covid19india.org/data.json')
                //for actual data by calling api
                const actualData = await res.json();
                console.log(actualData.statewise[0])
                // this line assign actual data in data(useState)
                setData(actualData.statewise[0])
            } catch (error) {
               console.log(error) 
            }
        }           
    }, [])


    
    return (
        <>
        <div className="project-title" >
           <p>COVID-19 TRACKER INDIA</p>
        </div>

        <div className="card-container" style={{background:'#00FFFF'}}>
            <div className="card-body">
                <span className="font">our</span>COUNTRY
            </div>
            <div className="card-item">
                 <p>INDIA</p>
            </div>
        </div>

        <div className="card-container" style={{background:'#008080'}}>
            <div className="card-body">
             <span className="font">total</span>RECOVERED
            </div>
            <div className="card-item">
                 <p>{data.recovered}</p>
            </div>
        </div>

        <div className="card-container" style={{background:'#008b8b'}}>
            <div className="card-body">
                 <span className="font">total</span>CONFIRMED
            </div>
            <div className="card-item">
                 <p>{data.confirmed}</p>
            </div>
        </div>

        <div className="card-container" style={{background:'#696969'}} >
            <div className="card-body">
                <span className="font">total</span>DEATH
            </div>
            <div className="card-item">
                 <p>{data.deaths}</p>
            </div>
        </div>

        <div className="card-container" style={{background:'red'}}>
            <div className="card-body">
              <span className="font">total</span>ACTIVE
            </div>
            <div className="card-item">
                 <p>{data.active}</p>
            </div>
        </div>

        <div className="card-container" style={{background:'#708090'}}>
            <div className="card-body">
             <span className="font">last</span>UPDATE
            </div>
            <div className="card-item" >
                 <p>{data.lastupdatedtime}</p>
            </div>
        </div>
        </>
    )
}

export default Covid 
 