import {query} from '@/getData/db'

export default async function handlerId(req, res){
  const id = req.query.id
  // console.log(id, 'id');
  if(req.method === 'GET'){
    let one_news = await query({
    query: `SELECT id, create_date, publicated, avatar_img_name, lang, title, teaser, content, 'order', show_avatar FROM news_news WHERE id=?`,
    values: [id]
    })
    res.status(200).json(one_news)
  }
 
}
