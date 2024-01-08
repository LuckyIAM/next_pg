import {query} from '@/getData/db'

export default async function getStorageDepartment(req, res) {
    if(req.method == "GET"){
        const storageDepartment = await query({
            //template for mysql
            // query: `SELECT *
            // FROM pages_content
            // WHERE title=?`,
            // values: ['Отдел хранения библиотечных фондов]
            query: `SELECT *
            FROM pages_content
            WHERE title='Отдел хранения библиотечных фондов'`,
            values: []
        })
        res.json(storageDepartment)
    }
}