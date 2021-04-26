import {useState,useEffect } from 'react';
import Search from '../components/Search/Search';
import CardDisplay from './CardDisplay';
import {getCardData} from '../functions/getCardData'
import fetchData from '../functions/fetchData';
import {firstThreeCities} from '../apis/config';

function WeatherApp() {
  const [city,setCity] = useState('');
  const [data,setData] = useState([]);
  const [cardData,setCardData] = useState([]);

  useEffect(()=>{
    firstThreeCities.map(city=> {
        fetchData(city,setData);
        });
},[]);

  useEffect(()=> {
    setTimeout(()=> {
        getCardData(data,setCardData,true);
    },100);
},[data]);

  
  return (
    <div className="WeatherApp">
      <Search setCity={setCity} city={city} data={data} setCardData={setCardData}
      setData={setData} cardData={cardData}/>
      <CardDisplay data={data} setCardData={setCardData}
      city={city} setData={setData} cardData={cardData}/>
    </div>
  );
}

export default WeatherApp;
