import axios from 'axios'


const getData = async (type, data) => {
    const apiKey = '88ea48b6af174e7e71d3fb1c98bb76f0';
    const url = `https://api.themoviedb.org/3/${type}/${data}?api_key=${apiKey}&language=en-US&page=1`;
    const response = await axios.get(url);
    const list = response.data.results;

    return list
}
export default getData;


