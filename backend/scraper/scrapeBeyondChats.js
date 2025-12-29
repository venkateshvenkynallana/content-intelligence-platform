const axios = require('axios');
const cheerio = require('cheerio');
const Article = require('../Article');

async function scrape(){
    const data = await axios.get('https://beyondchats.com/blogs/');
    const $ = cheerio.load(data);

    const articles = $('.blog-card').slice(-5);

    for (let i of articles) {
        const title = $(i).find('h2').text();
        const url = $(i).find('a').attr('href');

        await Article.create({ title, url});
    }
}

scrape();