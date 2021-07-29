import {useEffect, useState} from 'react'

import  "../App.css";

function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
          .then((res) => res.json())
          .then((data) => {
            setCountries(data);
            
          });

          console.log(countries)
    },[])
    
    return (
        <div className="countries">
        {
            countries.map((country, index)=><div className="cards" key={index}>
                <h3>{country.name}</h3>
                <img className="img"src={country.flag}></img>
                <p>Capital: {country.capital}</p>
                <p>Language: {country.languages[0].name}</p>               
                </div>)
        }
        </div>
    )
}

export default Countries
