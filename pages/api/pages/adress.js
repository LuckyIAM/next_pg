import {query} from '@/getData/db'


export default async function getAdress(req, res){
  if(req.method === 'GET'){
    const adress = await query({
      //template for mysql
      // query: `SELECT id, page_id, lang, title, meta, content
      // FROM pages_content WHERE title=?`,
      // values: ['Адрес и время работы РГБИ']

      //template for pg
      query: `SELECT id, page_id, lang, title, meta, content
      FROM pages_content WHERE title='Адрес и время работы РГБИ'`,
      values: []
    })
    

    res.json(adress)
  }
  
}