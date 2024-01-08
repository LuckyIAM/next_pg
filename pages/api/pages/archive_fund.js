import {query} from '@/getData/db'


export default async function ArchiveFund(req, res) {
    const result = await query({
        query: `SELECT *
        FROM pages_content
        WHERE title='Архивный фонд'`,
        values:[]
    })
    res.json(result)
}