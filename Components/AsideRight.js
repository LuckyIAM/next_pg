import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './AsideRight.module.scss'


export default function AsideRightPage(){
    const [books, setBooks] = useState()

    async function GET(){
        const result = await fetch('/api/new_in_lib/books', {
            method: 'GET',
            cache: 'no-store'
        })
        const res = await result.json()
        // console.log(res);
        setBooks(res)

    }
    useEffect(() => {
        GET()
    }, [])
    return(<>
        <div className={styles.wrapper}>
            <div className={styles.name_title}><img alt="Choice librarian" src="/icons/choice_librarian.png"/></div>
            {books && books.map((book, index) => <Link className={styles.card_container} href={`/new_in_lib/${book.id}`} key={index}>
            <div className={styles.icon}><img alt="image book" src={`/media/itemavatars/${book.paht_image}`}/></div>
            <div className={styles.text_container}>
                <div className={styles.title}>{book.title}</div>
            </div>
        </Link>)}
        </div>
    </>
    )
 
}