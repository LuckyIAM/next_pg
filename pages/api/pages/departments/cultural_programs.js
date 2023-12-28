import { query } from '@/getData/db'

export default async function getCulturalPrograms(req, res) {
    const result = await query({
        query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
        values: ['Отдел культурных программ']
    })
    res.json(result)
}