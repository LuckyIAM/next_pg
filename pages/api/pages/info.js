import {query} from '@/getData/db'


export default async function getInfo(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values:['Общая информация']
        query: `SELECT id, page_id, lang, title, meta, content 
        FROM pages_content WHERE title='Общая информация'`,
        values:[]
    })
    res.json(result)
}