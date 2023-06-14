import axios from 'axios';

const options = async(category)=>{
    const response=await axios.get('https://andruxnet-random-famous-quotes.p.rapidapi.com/',{
    params: {
        cat: category,
        count: '1'
        
    },
    headers: {
        'X-RapidAPI-Key': '7bf21954e0msh58a06bf0f93fe6dp1d61a7jsn9af81e4cf7ef',
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
    },
    });
    const datas=[response.data[0].quote,response.data[0].author];
    return datas;
};
export default options;