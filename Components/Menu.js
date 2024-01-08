import { useRouter } from 'next/router';
import styles from './Menu.module.css'


const dataMenu = [
    {
        title: 'НОВОСТИ',
        href: '/news',
        data_set: 'news',
        submenu: [
            {name: 'Архив',
            link: '/'}
        ], 
    },
    {
        title: 'О БИБЛИОТЕКЕ',
        href: '/pages/about_library',
        data_set: 'about',
        submenu: [
            {name: 'Адрес и время работы РГБИ',
            link: '/pages/about/adress'},
            {name: 'Запись читателей',
            link: '/pages/about/reader_entry'},
            {name: 'Общая информация',
            link: '/pages/about/info'},
            {name: 'Из истории РГБИ',
            link: '/pages/about/history'},
            {name: 'Структура библиотеки',
            link: '/pages/departments'},
            {name: 'Реквизиты библиотеки',
            link: '/pages/about/requisites'},
            {name: 'Нормативные документы',
            link: '/pages/about/regulations'},
            {name: 'Попечительский совет',
            link: '/pages/about/board_of_trustees'},
            {name: 'Противодействие коррупции',
            link: '/'},
            {name: '3D панорамы библиотеки',
            link: '/pages/about/3D_panoramas_of_the_library'},
        ], 
    },
    {
        title: 'УСЛУГИ',
        href: '/pages/services',
        data_set: 'services',
        submenu: [
            {name: 'Платные',
            link: '/pages/services/price_list'},
            {name: 'Бесплатные',
            link: '/'}
        ]
    },
    {
        title: 'ФОНДЫ',
        href: '/pages/funds',
        data_set: 'funds',
        submenu: [
            {name: 'Основной фонд',
            link: '/pages/funds/storage_department'},
            {name: 'Справочно-информационный фонд',
            link: '/pages/funds/reference_and_information_fund'},
            {name: 'Фонд изобразительных материалов',
            link: '/pages/funds/department_of_iconographic_materials'},
            {name: 'Фонд отдела Абонемента',
            link: '/pages/funds/subscription_department_fund'},
            {name: 'Фонд газетных вырезок и театральных программ',
            link: '/pages/funds/newspaper_clippings_and_theater_programs_foundation'},
            {name: 'Видеофонд',
            link: '/pages/funds/video_fund'},
            {name: 'Фонд изданий на микрофишах',
            link: '/pages/funds/fund_of_publications_on_microfiche'},
            {name: 'Архивный фонд',
            link: '/pages/funds/archive_fund'}
        ]
    
    },
    {
        title: 'КАТАЛОГИ',
        href: '/',
        data_set: 'catalogs',
        submenu: [
            {name: 'Электронный каталог',
            link: '/'},
            {name: 'Предметный каталог',
            link: '/'},
            {name: 'Карточные каталоги',
            link: '/'}
        ]
    },
    {
        title: 'ЭЛЕКТРОННЫЕ РЕСУРСЫ',
        href: '/',
        data_set: 'electonic_resources',
        submenu: [
            {name: 'Базы данных',
            link: '/'},
            {name: 'Электронный каталог',
            link: '/'},
        ]
    },
    {
        title: 'КОНТАКТЫ',
        href: '/pages/contacts',
        data_set: 'contacts',
        submenu: []
    },

]

export default function Menu() {
    const library = useRouter()
    const linkPage = useRouter()

    function dropDown(e){
        e.preventDefault()
        // console.log(e.currentTarget);
        e.currentTarget.children[1].parentElement.style.background = '#6b001c'
        e.currentTarget.children[1].parentElement.style.color = '#fff'
        e.currentTarget.children[1].parentElement.style.boxShadow= '0 5px 10px -40px #e0dcd0, 0 5px 10px -40px #e0dcd0'
        e.currentTarget.children[1].style.display = 'flex'
    }

    function cleanMenu(e){
        e.preventDefault()
        e.currentTarget.style.fontWeight = '800'
        e.currentTarget.children[1].style.display = 'none'
        e.currentTarget.children[1].parentElement.style.background = '#fffbe0'
        e.currentTarget.children[1].parentElement.style.color = '#6b001c'
    }
    function goTo(e){
        e.preventDefault()
        // console.log(e.currentTarget);
        library.push(e.currentTarget.dataset.href)
    }
    function goToPage(e){
        e.preventDefault()
        // console.log(e.currentTarget.dataset.link);
        linkPage.push(e.currentTarget.dataset.link)
    }

    return(
        <menu className={styles.menu} > 
            {dataMenu.map((item_menu, index) =>
             <div className={styles.cell_menu} 
             key={index}
             onMouseOver={dropDown}
             onMouseOut={cleanMenu}
             
             >
                <div className={styles.link} data-href={item_menu.href} onClick={goTo}>
                    {item_menu.title}
                </div>
                <div className={styles.submenu}>
                    <div className={styles.item}>
                        {item_menu.submenu && item_menu.submenu.map((sub, index) => <div className={styles.sub_item} data-link={sub.link} key={index} onClick={goToPage}>{sub.name}</div>)}
                    </div>
                </div>
            </div>)}
        </menu>
    )
}