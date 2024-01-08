import {query} from '@/getData/db'


export default async function getReaderEntry(req, res) {
    if(req.method === "GET"){
        const readerEntry = await query({
            //template for mysql
            // query: 'SELECT id, page_id, lang, title, meta, content FROM pages_content WHERE title=?',
            // values: ['Запись читателей']
            query: `SELECT id, page_id, lang, title, meta, content
            FROM pages_content WHERE title='Запись читателей'`,
            values: []
        })
        res.json(readerEntry)
    }
}