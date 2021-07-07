import React,{useEffect,useState} from 'react'
import './ui.css'
import axios from 'axios'

const Covid = () => {
    //for catch api call data
    const [data, setData] = useState([])

    

    // For API call
    useEffect(() => {
       const covidData = async() =>{
         try {
            const {data} = await axios.get('https://api.covid19india.org/data.json')
            setData(data.statewise[0])
            
        } catch (error) {
           console.log(error) 
        }
       }
        covidData()             
    }, [])


    
    return (
        <div>
        <div className="project-title" >
           <p>COVID-19 TRACKER INDIA</p>
        </div>
        <div className="container">
            <div className="row">



               <div className="col">
                 <div className="card-container mx-auto my-5" style={{background:'#fc9803'}}>
                    <div className="card-body">
                      <span className="font">our</span>COUNTRY
                    </div>
                    <div className="card-item">
                       <p>INDIA</p>
                    </div>
                  </div>
               </div>




               <div className="col">
                  <div className="card-container mx-auto my-5" style={{background:'#7493a3'}}>
                     <div className="card-body">
                         <span className="font">total</span>RECOVERED
                     </div>
                     <div className="card-item">
                        <p>{data.recovered}</p>
                     </div>
                   </div>
               </div>




               <div className="col">
                   <div className="card-container mx-auto my-5" style={{background:'#3399ff'}}>
                       <div className="card-body">
                         <span className="font">total</span>CONFIRMED
                      </div>
                      <div className="card-item">
                        <p>{data.confirmed}</p>
                      </div>
                  </div>
               </div>




               <div className="col">
                  <div className="card-container mx-auto my-5" style={{background:'#696969'}} >
                      <div className="card-body">
                         <span className="font">total</span>DEATH
                      </div>
                      <div className="card-item">
                         <p>{data.deaths}</p>
                      </div>
                  </div>
               </div>



               <div className="col">
                    <div className="card-container mx-auto my-5" style={{background:'red'}}>
                        <div className="card-body">
                           <span className="font">total</span>ACTIVE
                       </div>
                       <div className="card-item">
                          <p>{data.active}</p>
                      </div>
                  </div>
               </div>



               <div className="col">  
                  <div className="card-container mx-auto my-5" style={{background:'	#134d00'}}>
                     <div className="card-body">
                        <span className="font">last</span>UPDATE
                     </div>
                     <div className="card-item" >
                        <p>{data.lastupdatedtime}</p>
                     </div>
                  </div>
               </div>



            </div>
        </div>
        
        <div className="footer">
            Created by Sada<span style={{color:'red'}}>brij</span> shah @2021
       </div>
        

        </div>
    )
}

export default Covid 
 