import {API_KEY, API_BASE_URL} from '../apis/config';

const fetchData = async (city,setData) => {

    await fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((result) => setData(prevState=>{
           return [result,...prevState]
        }
           ));
}

export default fetchData;