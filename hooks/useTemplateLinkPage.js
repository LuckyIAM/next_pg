import Head from 'next/head';
import styles from './useTemplateLinkPage.module.scss'


export default function TemplateLinkPage(dataPage, title_head, titlePage, slug = '') {
    const getRendiring = ()=> {
        return(<>
        <Head>
            <title>{title_head}</title>
        </Head>
        <main className={styles.about_library}>
            <h1 className={styles.title_page}>{titlePage}</h1>
            <ul class={styles.subpages}> 
            {dataPage && dataPage.map((data, index) => <li class={styles.subpage} key={index}>
                    <span>►</span>
                    <a href={`${slug}${data.link}`}>
                        {data.name}
                    </a>
                </li>)} 
            </ul>
        </main>
        </>)
    }
    return {getRendiring};
}