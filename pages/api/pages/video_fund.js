import {query} from '@/getData/db'

export default async function getVideoFund(req, res) {
    if(req.method == "GET"){
        const videoFund = await query({
            //template for mysql
            // query: `SELECT *
            // FROM pages_content
            // WHERE title=?`,
            // values: ['Видеофонд']
            query: `SELECT *
            FROM pages_content
            WHERE title='Видеофонд'`,
            values: []
        })
        res.json(videoFund)
    }
}