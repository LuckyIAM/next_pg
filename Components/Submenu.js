import styles from './Submenu.module.scss'


export default function Submenu({submenu_name}) {
    return(
        <div className={styles.submenu}>{submenu_name}</div>
    )
}