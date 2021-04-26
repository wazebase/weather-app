import SmallCard from '../SmallCard/SmallCard';

const CardBoard = ({cardBoardData,setCardDataUpdate,cardDataUpdate,setExpandCard,expandCard}) => {

    const handleShowLess = () => {
        setCardDataUpdate(cardBoardData[0].id);
        setExpandCard(false);
      }

return(
<div id='card-board'>
    <button onClick={handleShowLess}>Show Less</button>
<h1 id='city'>{cardBoardData[0].city}</h1>
<p id="weatherName">{cardBoardData[0].weatherName}</p>
<div id='small-card-data'>
    {cardBoardData.map(card=>
       <SmallCard icon={card.icon} weatherDate={card.weatherDate} temp={card.temp}/>
    )}
    </div>
</div>
)
}

export default CardBoard;