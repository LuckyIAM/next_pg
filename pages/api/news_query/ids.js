import {query} from '@/getData/db'


export default async function handler(req, res){
  if(req.method === 'GET'){
    const news = await query({
      query: `SELECT id, publicated, avatar_img_name, lang, title, teaser from news_news`,
      values: []
    })
    res.json(news)
  }

}

