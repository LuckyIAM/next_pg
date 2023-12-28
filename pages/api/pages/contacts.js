import {query} from '@/getData/db'


export default async function getContacts(req, res){
  if(req.method === 'GET'){
    const contact = await query({
      query: `SELECT id, page_id, lang, title, meta, content
      FROM pages_content WHERE title=?`,
      values: ['Контакты']
    })
    

    res.status(200).json(contact)
  }
  
}
