import {query} from '@/getData/db'

export default  function data(table_name, keywords) {
    async function get(req, res){
        const result = await query({
            query: `SELECT *
            FROM ${table_name}
            WHERE title=${keywords}`,
            values: []
        })
        console.log(result);
        res.json(result)
        
    }
    return {get}
}