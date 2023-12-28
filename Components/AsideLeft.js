import AsideMenuPage from './AsideMaenu'
import styles from './AsideLeft.module.scss'

const dataMenu = [
    {
        title: 'Выставки, концерты',
        href: '/'
    },
    {
        title:'Крупный план',
        href: '/'
    },
    {
        title:'Передвижные выставки',
        href: '/'
    },
    {
        title:'Виртуальные выставки',
        href: '/'
    },
    {
        title:'Конференции, семинары',
        href: '/'
    },
    {
        title:'Доступная среда',
        href: '/'
    },
    {
        title:'Экскурсии',
        href: '/'
    },
    {
        title:'Коллегам',
        href: '/'
    },
    {
        title:'Проекты библиотеки',
        href: '/'
    },
    {
        title:'Издания РГБИ',
        href: '/'
    },
    {
        title:'Библиотека благодарит',
        href: '/'
    },
    {
        title:'Секция библиотек по искусству и музейных библиотек РБА',
        href: '/'
    },
    {
        title:'Вакансии',
        href: '/'
    },
    {
        title:'Официальные документы РГБИ',
        href: '/'
    }


]

export default function AsideLeftPage(){

    return(
        <aside className={styles.aside}>
            <div className={styles.wrapper}>
                <div className={styles.navbar}>
                    {dataMenu.map((data, index) => <AsideMenuPage
                    key={index}
                    title={data.title}
                    href={data.href}/>)}
                </div>
                <div><a className={styles.poster}>Афиша на месяц</a></div>
                <div className='MCRF'><a href='https://culture.gov.ru/'><img alt='Ministry of Culture' src='/icons/MCRF_single.png'/></a></div>
                <div className='culture'><a href='https://grants.culture.ru/helpful_information/'><img alt='Russian grants' src='/icons/cultura.png'/></a></div>
                <div className={styles.qr_assessment}>
                    <div className={styles.title_assesment}>ЧТОБЫ ОЦЕНИТЬ УСЛОВИЯ ПРЕДОСТАВЛЕНИЯ УСЛУГ ИСПОЛЬЗУЙТЕ QR-КОД</div>
                    <div><a href='https://bus.gov.ru/qrcode/rate/444883'><img alt='Rate the quality' src='/icons/qr_code.png'/></a></div>
                    <div className={styles.bottom_text}>ИЛИ ПЕРЕЙДИТЕ ПО <span><a className={styles.redirect} href='https://bus.gov.ru/qrcode/rate/444883'>ССЫЛКЕ</a></span></div>
                </div>
            </div>
        </aside>
    )
    
}