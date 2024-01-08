import {query} from '@/getData/db'

export default async function getSubscriptionFund(req, res) {
    if(req.method == "GET"){
        const subscriptionFund = await query({
            //template for mysql
            // query: `SELECT *
            // FROM pages_content
            // WHERE title=?`,
            // values: ['Фонд отдела Абонемента']
            query: `SELECT *
            FROM pages_content
            WHERE title='Фонд отдела Абонемента'`,
            values: []
        })
        res.json(subscriptionFund)
    }
}