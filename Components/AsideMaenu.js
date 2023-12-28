import styles from './AsideMaenu.module.scss'


export default function AsideMenuPage({title, href}){
    return(
        <div className={styles.cell} href = {href}>
            {title}
            </div>
    )
}