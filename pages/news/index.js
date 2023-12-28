import { useState, useEffect, useContext } from 'react';
import AppContext from '@/Context/AppContext';
import CardNews from '@/Components/CardNews'
import Pagination from '@/Components/Pagination';
import Layout from '@/pages/layout';
import styles from './index.module.scss'


export default function News() {
  
  const [news, setNews] = useState([])
  const [quantityPage, setQuantityPage] = useState([])
  const [startCount, setStartCount] = useState(1)
  let [totalNews, setTotalNews] = useState()
  const context = useContext(AppContext)
  let addTo10 
  let pages = []


  async function GET(limit = 10, page = context.numberPage){ 
    const result = await fetch(`${process.env.NEXT_PUBLIC_URL}api/news_query/ids`, {
      method: 'GET',
      "Content-Type": "application/json",
      cache: 'no-store',
    })
    const res = await result.json()
  
    // console.log(res);
    let show =[]
    for(let i = 0;  i < res.length; i++){
      if(res[i].lang == context.lang && res[i].publicated === 1){
        show.push(res[i])
      }
    }
    // console.log(show);
    setTotalNews(show.length)
    setStartCount(context.numberPage)
    // console.log(startCount);
    let strCount = String(startCount)
    
    if(strCount.length >= 2){
      let digitLast = strCount[strCount.length - 1]
      // console.log(digitLast);
      addTo10 = 10 - Number(digitLast)
      // console.log('addTo 10', addTo10);
      setStartCount(startCount - Number(digitLast))
    } else{
      addTo10 = 10 - Number(strCount)
      // console.log(strCount, 'addto  10', addTo10);
      setStartCount(startCount - (startCount -1))
    }

    let count= startCount
    while (startCount + addTo10 >= count ) {
      pages.push(count)
      // froPagination = froPagination - 10
      count += 1
      // console.log(count, startCount);
    }
    setQuantityPage(pages)
    
    let l = limit
    let p = page
    let newsSlice = []
    // console.log(totalNews);
    let start = totalNews - (p * l)
    let end = totalNews - ((p-1) * l)
    newsSlice = show.slice(start, end)
    // console.log(newsSlice, 'newsSlice', start, end);
    let  newsLimit = [] 
    let elemIndex = newsSlice.length - 1
    while (elemIndex >= 0) {
      newsLimit.push(newsSlice[elemIndex])
      elemIndex = elemIndex- 1
    }
    // console.log(newsLimit, 'newsLimit');
    setNews(newsLimit)
  }


  // console.log(totalNews, totalNews)

  useEffect(() => {
    GET()
  }, [context.lang, context.numberPage, startCount, totalNews])

  function goPrevious(event){
    event.preventDefault()
    if(startCount >= 10){
      setStartCount(startCount - 10)
    }
  }
  function goNext(event) {
    event.preventDefault()
    
    if(startCount <= totalNews / 10  + 10){
      setStartCount(startCount + 10)
    }
  }
  
  // console.log(news, 'news1');
  // console.log(quantityPage);
  return <>
  <Layout>
      <div className={styles.wrapper} >
        <div className={styles.title}>Новости</div>
        <div className={styles.content}>
          {news.length >= 1 && news.map((one, index) => <CardNews
            key = {index}
            id = {one.id}
            img = {one.avatar_img_name}
            teaser = {one.teaser}
          />)}

          {quantityPage.length !== 0 && 
            <div className={styles.wrapper_pagination}>
              <div className={styles.previous} onClick={goPrevious}></div>
              {quantityPage.map((number, index) => <Pagination
              key = {index}
              num = {number}
              />
              )}
              <div className={styles.next} onClick={goNext}></div>
            </div>
        }
        </div>
      </div>
    </Layout>
  </>
}
