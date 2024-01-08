import {query} from '@/getData/db'


export default async function handler(req, res){
  if(req.method === 'GET'){
    const result = await query({
      query:`SELECT newinlib_itemcontent.id, newinlib_itemcontent.lang, newinlib_itemcontent.title, newinlib_itemcontent.content, newinlib_item.id, newinlib_item.avatar_img_name
      FROM newinlib_itemcontent INNER JOIN newinlib_item 
      ON newinlib_itemcontent.item_id=newinlib_item.id`,
      values: []
    })
    
    const quantity = result.length
    // console.log(quantity);
    let start = quantity - 7
    let new_books = result.slice(start, )
    // console.log(new_books);

    
    // console.log(new_books.reverse());
    res.json(new_books.reverse())
  }
  
}
