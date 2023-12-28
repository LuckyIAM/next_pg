import {query} from '@/getData/db'

export default async function getIdBook(req, res) {
    const id = req.query.id
    console.log(id, 'id');
    const result = await query({
        query:'SELECT id, item_id, lang, title, content FROM newinlib_itemcontent WHERE id=?',
        values: [id]
    })
    // console.log(result);
    const paht_image = await query({
        query:'SELECT id, create_date, publicated, avatar_img_name, main FROM newinlib_item WHERE id=?',
        values: [result[0].item_id]
    })

    // console.log(paht_image);
    result[0].path_image = paht_image[0].avatar_img_name
    res.json(result)
}