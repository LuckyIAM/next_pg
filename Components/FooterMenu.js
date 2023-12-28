import styles from './FooterMenu.module.scss'
export default function FooterMenu({title, href}){
    return(
        <div className={styles.cell_nav}>
            {title}
            <a href={href}></a>
        </div>
    )
}