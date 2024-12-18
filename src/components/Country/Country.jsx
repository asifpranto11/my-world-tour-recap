
import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountries,handleVisitedFlags}) => {
    // console.log(country)
    const  {name, flags, population,area,cca3 }= country 

      const [visited,setVisited] =useState(false)

      const handleVisited =()=>{
            //  setVisited(true)
            setVisited(!visited)
      }

      const passWithParams = () =>{
        handleVisitedCountries(country)
      }

    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color:visited ? 'purple':'white'}}>Name: {name?.common}</h3>
           <img src={flags.png} alt="" />
           <p>Population: {population}</p>
           <p>Area: {area}</p>
           <p><small>Code: {cca3}</small></p>
           <button onClick={passWithParams}>Mark Visited</button>
           <br />
           <button onClick={()=>handleVisitedFlags(country.flags.png)}>Visited Flags</button>
           <br />
           <button onClick={handleVisited}>{visited ?'Visited' :'Going'}</button>
           {/* {visited && 'I have visited this country'} */}
           {visited? 'I have visited this country':'I want to visit'}
           <hr />
           <CountryDetail country={country}
           handleVisitedCountries={handleVisitedCountries}
           handleVisitedFlags={handleVisitedFlags}
           
           >
                   
           </CountryDetail>
        </div>
    );
};

export default Country;