import {query} from '@/getData/db'


export default async function getReferenceAndInformationFund(req, res) {
    if(req.method == "GET"){
        const result = await query({
            //template for mysql
            // query: `SELECT *
            // FROM pages_content
            // WHERE title=?`,
            // values: ['Справочно-информационный фонд']
            query: `SELECT *
            FROM pages_content
            WHERE title='Справочно-информационный фонд'`,
            values: []
    
        })
        res.json(result)
    }
   
}