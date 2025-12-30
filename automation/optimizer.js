import axios from 'axios';

const optimizer = async ()=>{
    const {data : articles } = await axios.get('http://localhost:5000/api/articles');

    for(let article of articles){
        const improved = `Optimized version of ${article.title}`;
        await axios.put(`http://localhost:5000/api/articles/${article._id}`,{
            optimizerContent: improved,
        })
    }
}

export default optimizer;