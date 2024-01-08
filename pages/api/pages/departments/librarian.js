import { query } from '@/getData/db'

export default async function getLibrarian(req, res) {
    const result = await query({
        //template for mysql
        // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        // values: ['Основной фонд']
        query: `SELECT id, page_id, lang, title, meta, content 
        FROM pages_content WHERE title='Основной фонд'`,
        values: []
    })
    res.json(result)
}