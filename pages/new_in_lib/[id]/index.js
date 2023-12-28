import { useEffect, useState} from 'react'
import { useParams } from 'next/navigation'
import Layout from '@/pages/layout'
import styles from './index.module.scss'

export async function getServerSideProps({params}) {
    console.log(params);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/new_in_lib/${params.id}`)
    const result = await res.json()
    return {props: { result }}
  }
  

export default function NewInLibPage({result}) {
    console.log(result);
    return(<>
    <Layout>
    <div className={styles.wrapper}>
        <h1 className={styles.title} >{result[0].title}</h1>
        <main className={styles.container}>
            <div className={styles.image}><img alt='image book' src={`/media/uploads/newinlib/itemavatars/big/${result[0].path_image}` }/></div>
            {result[0].content && <div className={styles.content} dangerouslySetInnerHTML={{__html: result[0].content}}></div>}
        </main>
    </div>
</Layout>
    </>
    )
}