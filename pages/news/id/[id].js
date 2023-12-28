
import Layout from '@/pages/layout';
import styles from './id.module.scss'

export async function getServerSideProps({params}) {
  console.log(params);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news_query/id/${params.id}`)
  const result = await res.json()
  return {props: { result }}
}

export default function OneNewsPage({result}){
  console.log(result)
  return(<>
  <Layout>
    <div className={styles.wrapper}>
        <h1 className={styles.title} >{result[0].title}</h1>
        {result[0].content && <main className={styles.content} dangerouslySetInnerHTML={{__html: result[0].content.slice(result[0].content.indexOf('</p>') + 5)}}></main>}
    </div>
  </Layout>
  </>
  )
}
