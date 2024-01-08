import {query} from '@/getData/db'

export default async function getFundOfPublicationsOnMicrofiche(req, res) {
    if(req.method == "GET"){
        const result = await query({
            //template for mysql
            // query: `SELECT *
            // FROM pages_content
            // WHERE title=?`,
            // values: ['Фонд изданий на микрофишах']
            query: `SELECT *
            FROM pages_content
            WHERE title='Фонд изданий на микрофишах'`,
            values: []
        })
        res.json(result)
    }
    
}


// import useData from '@/hooks/useData'

// export default async function getData() {
//     const data = useData('pages_content', 'Фонд изданий на микрофишах') 
//     data.get()
// }