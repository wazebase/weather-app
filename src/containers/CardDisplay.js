import { useEffect,useState } from 'react';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import {getCardDataById} from '../functions/getCardData'
import CardBoard from '../components/CardBoard/CardBoard';
import './card-display.css';

const CardDisplay = ({setCardData,cardData,data,setData}) => {
  
    const [noCards,setNoCards] = useState(true);
    const [cardDataUpdate,setCardDataUpdate] = useState('');
    const [expandCard,setExpandCard] = useState(false);
  
    useEffect(()=> {
        if(cardData.length === 0) {
            setNoCards(true);
        }
        else{
            setNoCards(false)
        }
    },[cardData])

    useEffect(()=> {
        if(cardDataUpdate && expandCard) {
            let expandedCardData = getCardDataById(data,setCardData,cardDataUpdate,false);
            setCardData(prevState=> {
                return prevState.map(card=>card.id===cardDataUpdate? expandedCardData : card);
            })
        }
        else if(cardDataUpdate && !expandCard) {
            let [closedCard]= getCardDataById(data,setCardData,cardDataUpdate,true);
            setCardData(prevState=> {
                return prevState.map(card=>{
                    let id = Array.isArray(card)?card[0].id: card.id;
                    
                    return id===cardDataUpdate? closedCard : card});
            })
        }

    },[cardDataUpdate,expandCard]);
    

    return(
<div id='card-display'>
    <div id='greeting'>
        <p>Hey, pal! Nothing too fancy here, just another weather app. You can add new cards here, delete them and well, just do something, man.</p>
    </div>
  
<div id='cards-container'>
    
{cardData.map(card=>!Array.isArray(card)?<WeatherCard id={card.id} key ={card.id} city = {card.city} icon ={card.icon} weatherName={card.weatherName}
      weatherDate= {card.weatherDate} temp = {card.temp} minTemp={card.minTemp} maxTemp = {card.maxTemp}
feelsLike={card.feelsLike} cardData={cardData} setCardData={setCardData} 
noCards={noCards} setNoCards={setNoCards} cardDataUpdate={cardDataUpdate}
expandCard={expandCard} setExpandCard={setExpandCard} setCardDataUpdate={setCardDataUpdate} data={data} setData={setData}/>
:
<CardBoard cardBoardData={card} 
expandCard={expandCard} setExpandCard={setExpandCard} cardDataUpdate={cardDataUpdate} setCardDataUpdate={setCardDataUpdate}/>)}

{noCards? (<div><p id='nothing'>Nothing to show here yet. Make some cards!</p></div>):(<></>)}
</div>
</div>
    )
}
export default CardDisplay;