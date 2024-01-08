import { query } from '@/getData/db'

export default async function getScientificInformation(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Отдел научной информации']
        query: `SELECT id, page_id, lang, title, meta, content 
        FROM pages_content WHERE title='Отдел научной информации'`,
        values: []
    })
    res.json(result)
}