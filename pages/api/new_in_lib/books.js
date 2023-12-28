import {query} from '@/getData/db'


export default async function handler(req, res){
  if(req.method === 'GET'){
    const result = await query({
      query: `SELECT * from newinlib_itemcontent`,
      values: []
    })
    const quantity = result.length
    console.log(quantity);
    let start = quantity - 7
    let new_books = result.slice(start, )
    // console.log(new_books);

    for( let i = 0; i < new_books.length; i++){
        const getImage = await query({
            query: 'SELECT id, create_date, publicated, avatar_img_name, main FROM newinlib_item where id=?',
            values: [new_books[i].item_id]
        })
        // console.log(getImage);
        new_books[i].paht_image = await getImage[0].avatar_img_name
    }
    
    res.json(new_books.reverse())
  }
  
}
