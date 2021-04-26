import {useState} from 'react';

const WeatherCard = (props) => {
  const [showMore,setShowMore] = useState(false);

  const handleRemove = () => {
    props.setCardData(prevState=> {
     return prevState.filter(card=> card.id !== props.id);
    })
    props.setData(prevState=>{
      return prevState.filter(data=>data.city.id !== props.id);
    })
    
    if(props.cardData.length===1) {
      props.setNoCards(true);
    }
    else {
      props.setNoCards(false);
    }
  }

  const handleShowMore = () => {
    setShowMore(true);
    props.setCardDataUpdate(props.id);
    props.setExpandCard(true);
  }
  

    return(
    <div id='weather-card' style={props.expandCard?{display:'none'}:{}}>
      <button id='remove' onClick={handleRemove}>X</button>
      <button id='show-more' onClick={handleShowMore}>show more</button>
      <h1 id='city'>{props.city}</h1>
      <img  src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather img"></img>
  <p id="weatherName">{props.weatherName}</p>
  <p id="weatherDate">{props.weatherDate}</p>
  <p id="temp">{props.temp}</p>
  <p id='minTemp'>Min: {props.minTemp}</p>
  <p id="maxTemp">Max: {props.maxTemp}</p>
  <p id = "feelsLike">Feels like {props.feelsLike}</p>
    </div>
    );
  }

  export default WeatherCard;