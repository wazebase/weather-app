import Card from './Card';

export const getCardData = (data,setCardData,oneCard) => {
    let newCardData = [];
    let cardAmount = oneCard? 1:5;

    for(let i = 0; i< cardAmount; i++) {
      
      if(data !==null) {
        data.map(data=>{
          let newData  = data.list[i];
          let city = data.city.name;
          let id = data.city.id;
          let newCard = new Card(id,city,newData.weather[0].icon,newData.weather[0].description,newData.dt_txt,
            newData.main.temp,newData.main.temp_min,newData.main.temp_max,newData.main.feels_like);
           if(newCard!==[] && !newCardData.includes(newCard)) {
            newCardData.push(newCard);
           }
        })
       
      }
     }
    setCardData(newCardData);
}

export const getCardDataById = (data,setCardData,id,oneCard) => {
  let newCardData = [];
  let cardAmount = oneCard? 1:5;
  for(let i = 0; i< cardAmount; i++) {
    
    if(data !==null) {
      data.map(data=>{
        let newData  = data.list[i];
        let city = data.city.name;
        let cityID = data.city.id;
        if(cityID===id) {
        let newCard = new Card(id,city,newData.weather[0].icon,newData.weather[0].description,newData.dt_txt,
          newData.main.temp,newData.main.temp_min,newData.main.temp_max,newData.main.feels_like);
         if(newCard!==[] && !newCardData.includes(newCard)) {
          newCardData.push(newCard);
         }
      }
    })
     
    }
   }
  return newCardData;
}


