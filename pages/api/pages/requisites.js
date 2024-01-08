import {query} from '@/getData/db'

export default async function getRequisites (req, res) {
    if(req.method == 'GET'){
        const requisites = await query({
            //Template from mysql
            // query: `SELECT *
            // FROM pages_content WHERE title= `,
            // values: ['Реквизиты библиотеки']
            query: `SELECT *
            FROM pages_content WHERE title='Реквизиты библиотеки'`,
            values: []
        })
        res.json(requisites)
    }
}
