import { query } from '@/getData/db'

export default async function getCulturalPrograms(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Отдел культурных программ']
        query: `SELECT *
        FROM pages_content WHERE title='Отдел культурных программ'`,
        values: []
    })
    res.json(result)
}