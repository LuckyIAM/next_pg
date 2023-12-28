import Link from "next/link"
import styles from './CardNews.module.scss'



const CardNews = ({id, img, teaser}) => {

  return (<>
  <Link href = {`/news/id/${id}`} className={styles.box}>
    <img className={styles.avatar_img} alt="teaser" src = {`https://liart.ru/media/uploads/newsavatars/${img}`}/>
    <div className={styles.teaser}>
        <div className={styles.teaser}>{teaser}</div>
        <div className={styles.goTo} >Подробнее...</div>
    </div>
  </Link> 
  </>
)
  
}

export default CardNews