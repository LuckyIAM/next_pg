import db from '../db' 

class GetNews{
    async getAll(){
        const result = await db.execute('select * from news_news')
        // console.log(result);
        return result  
    }

    async getLimitNews(limit = 10, page = 1){
        const result  = await db.execute('select * from news_news')
        // console.log((quantityRows));
        let objectShow = []
        for(let i = 0; i < result[0].length; i++){
            if(result[0][i].show_avatar != 0){
                objectShow.push(result[0][i])
            }
        }
        console.log(objectShow);
        let lmt = limit
        let p = page
        let quantityRows = objectShow.length
        // console.log(lmt, p);
        let start = quantityRows - (p * lmt)
        let end = quantityRows - ((p - 1) * lmt)
        // console.log(start, end);
        let resultLimit = objectShow.slice(start, end)
        // console.log(resultLimit);
        return resultLimit
    }



    async getOneNews(params){
        const result = db.execute(`SELECT id, create_date, publicated, avatar_img_name, lang, title, teaser, content, 'order', show_avatar FROM news_news WHERE id=${params}`)
        console.log(result);
        return result
    }   
}

const getNews = new GetNews()
export default getNews 
