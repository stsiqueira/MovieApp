import axios from 'axios'
import { apiKey } from './Const';

const getData = async (type, data, query = 1 ) => {
    let url=''
    query == 1 ?
        url = `https://api.themoviedb.org/3/${type}/${data}?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
    :
        url = `https://api.themoviedb.org/3/${type}/${data}?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;
    const response = await axios.get(url);
    const list = response;
    return list
}

export default getData;
