import { query } from '@/getData/db'

export default async function getInformationTehnology(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Центр информационных технологий']
        query: `SELECT * 
        FROM pages_content WHERE title='Центр информационных технологий'`,
        values: []
    })
    res.json(result)
}