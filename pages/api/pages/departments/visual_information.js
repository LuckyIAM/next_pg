import { query } from '@/getData/db'

export default async function getVisualInformation(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Центр визуальной информации']
        query: `SELECT * FROM pages_content WHERE title='Центр визуальной информации'`,
        values: []
    })
    res.json(result)
}