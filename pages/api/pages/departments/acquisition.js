import { query } from '@/getData/db'

export default async function getAcquisition(req, res) {
    const result = await query({
        //template from mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Отдел комплектования']
        query: `SELECT *
        FROM pages_content WHERE title='Отдел комплектования'`,
        values: []
    })
    res.json(result)
}