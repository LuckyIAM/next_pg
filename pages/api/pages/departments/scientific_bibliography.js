import { query } from '@/getData/db'

export default async function getScientificBibliography(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Отдел научной библиографии']
        query: `SELECT *
        FROM pages_content WHERE title='Отдел научной библиографии'`,
        values: []
    })
    res.json(result)
}