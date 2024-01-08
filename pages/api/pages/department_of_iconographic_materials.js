import {query} from '@/getData/db'


export default async function getIconographicMaterials(req, res){
  if(req.method === 'GET'){
    const result = await query({
      //template for mysql
      // query: `SELECT id, page_id, lang, title, meta, content
      // FROM pages_content WHERE title=?`,
      // values: ['Контакты']
      query: `SELECT *
      FROM pages_content WHERE title='Фонд изобразительных материалов'`,
      values: []
    })
    

    res.json(result)
  }
  
}
