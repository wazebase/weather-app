import {useEffect} from 'react';
import fetchData from '../../functions/fetchData';
import cities from 'cities.json';
const Search = ({setCity,setData,city,data,setCardData,cardData}) => {
  
    const handleSearch = () => {
        let newCity ='';
        let cityExistAlready = false;

        cardData.forEach(card=>{
            if(card.city.toLowerCase() === city) {
                cityExistAlready = true;
            }
        })
        if (!cityExistAlready) {

        cities.forEach(checkCity=>{
            if(checkCity.name.toLowerCase()===city) {
                newCity = city;
            }
        })
        if(!newCity) {
            alert('city not found');
        }
        else {
            fetchData(city,setData);
        }
            
         }
         else {
             alert('city exist already!');
         }
        }

    return (
        <div id="search">
        <input id="cityName" placeholder="Enter your city" onInput={(event)=>{setCity(event.target.value.toLowerCase())}}></input>
        <button id="search" onClick={()=>handleSearch()}>Search</button>
        </div>
    )
}

export default Search;