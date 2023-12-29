import Link from 'next/link'
import styles from './Menu.module.css'
import { useEffect, useRef, useState } from 'react'

const dataMenu = [
    {
        title: 'НОВОСТИ',
        href: '/',
        data_set: 'news',
        submenu: [
            {name: 'Архив',
            link: '/'}
        ], 
    },
    {
        title: 'О БИБЛИОТЕКЕ',
        href: '/',
        data_set: 'about',
        submenu: [
            {name: 'Адрес и время работы РГБИ',
            link: '/'},
            {name: 'Запись читателей',
            link: '/'},
            {name: 'Общая информация',
            link: '/'},
            {name: 'Из истории РГБИ',
            link: '/'},
            {name: 'Структура библиотеки',
            link: '/'},
            {name: 'Реквизиты библиотеки',
            link: '/'},
            {name: 'Нормативные документы',
            link: '/'},
            {name: 'Попечительский совет',
            link: '/'},
            {name: 'Противодействие коррупции',
            link: '/'},
            
        ], 
    },
    {
        title: 'УСЛУГИ',
        href: '/',
        data_set: 'services',
        submenu: [
            {name: 'Платные',
            link: '/'},
            {name: 'Бесплатные',
            link: '/'}
        ]
    },
    {
        title: 'ФОНДЫ',
        href: '/',
        data_set: 'funds',
        submenu: [
            {name: 'Основной фонд',
            link: '/'},
            {name: 'Справочно-информационный фонд',
            link: '/'},
            {name: 'Фонд изобразительных материалов',
            link: '/'},
            {name: 'Фонд отдела Абонемента',
            link: '/'},
            {name: 'Фонд газетных вырезок и театральных программ',
            link: '/'},
            {name: 'Видеофонд',
            link: '/'},
            {name: 'Фонд изданий на микрофишах',
            link: '/'},
            {name: 'Архивный фонд',
            link: '/'},
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
        href: '/',
        data_set: 'contacts',
        submenu: []
    },

]

export default function Menu() {
    const[flag, setFlag] = useState(false)
    const[menu, setMenu] = useState(dataMenu)
    useEffect(() => {
        console.log(flag);
        setMenu(dataMenu)
    }, [menu, flag])
    
    function dropDown(e){
        e.preventDefault()
        console.log(e.currentTarget.children);
        e.currentTarget.children[1].style.display = 'flex'
        // e.currentTarget.children[1].classList.remove('submenu')
        // e.currentTarget.children[1].classList.add('active')
        console.log(e.currentTarget.children[1]);
        setFlag(true)
    }

    function cleanMenu(e){
        e.preventDefault()
        e.currentTarget.children[1].style.display = 'none'
        // e.currentTarget.children[1].classList.add('submenu')
        console.log(e.currentTarget.children[1]);
        setFlag(false)
    }

    return(
        <menu className={styles.menu} > 
            {menu.map((item_menu, index) =>
             <div className={styles.cell_menu} 
             data-index={index} 
             key={index}
             onMouseOver={dropDown}
             onMouseOut={cleanMenu}
             >
                <div>
                    <a className={styles.link} 
                        href={item_menu.href} 
                        >{item_menu.title}
                    </a>
                </div>
                <div className={styles.submenu}>
                    <div className={styles.item}>
                        {item_menu.submenu && item_menu.submenu.map((sub, index) => <div className={styles.sub_item}><a href={sub.link}>{sub.name}</a></div>)}
                    </div>
                </div>
            </div>)}
        </menu>
    )
}