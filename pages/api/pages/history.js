import {query} from '@/getData/db'

export default async function getHistory(req, res){
    if(req.method === 'GET'){
        const result = await query({
            query: `SELECT id, page_id, lang, title, meta, content
            FROM pages_content WHERE title=?`,
            values: ['Из истории РГБИ']
        })
        res.status(200).json(result)
    }
}