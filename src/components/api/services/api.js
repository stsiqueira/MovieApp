import axios from 'axios'

const getData = async (type, data, query = 1 ) => {
    const apiKey = '88ea48b6af174e7e71d3fb1c98bb76f0';
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
