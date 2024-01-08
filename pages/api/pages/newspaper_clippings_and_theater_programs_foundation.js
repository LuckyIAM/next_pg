import {query} from '@/getData/db'

export default async function getNewspaperAndTheatrPrograms(req, res) {
    if(req.method =="GET"){
        const newspaperAndTheatePrograms = await query({
        //template for mysql
        // query:`SELECT *
        // FROM pages_content
        // WHERE  title=?`,
        // values: ['Фонд газетных вырезок и театральных программ']
        query:`SELECT *
        FROM pages_content
        WHERE  title='Фонд газетных вырезок и театральных программ'`,
        values: []
    })
    res.json(newspaperAndTheatePrograms)
}
}