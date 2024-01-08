import { query } from '@/getData/db'

export default async function getAbonement(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Отдел абонемента']
        query: `SELECT * 
        FROM pages_content WHERE title='Отдел абонемента'`,
        values: []
    })
    res.json(result)
}