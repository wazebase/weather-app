const SmallCard = (props) => {
    return(
    <div id='small-card'>
  <img  src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather img"></img>
  <p id="temp">{props.temp}</p>
  <p id="weatherDate">{props.weatherDate}</p>
        </div>
    )
}

export default SmallCard;