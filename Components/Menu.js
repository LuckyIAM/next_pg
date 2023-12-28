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

    useEffect(() => {
        if(!flag){
            // ((e) =>{

            //     const cell_menu = e.currentTarget
            //     console.log(cell_menu);
            //     console.log(cell_menu.dataset.index);
            //     const ul = document.createElement('ul')
            //     ul.style.fontSize = '20px'
            //     const cellIndex = dataMenu[cell_menu.dataset.index].submenu
            //     console.log(cellIndex.length * 40);
            //     ul.style.height = `${(cellIndex.length * 40) + 70}px`
            //     ul.style.background = '#6b001c'
            //     for(let i = 0; i < dataMenu[cell_menu.dataset.index].submenu.length; i++){
            //         const li = document.createElement('li')
            //         li.classList.add('subnav')
            //         const a = document.createElement('a')
            //         a.classList.add('a')
            //         a.href = dataMenu[cell_menu.dataset.index].submenu[i].link
            //         a.textContent = dataMenu[cell_menu.dataset.index].submenu[i].name
            //         li.append(a)
            //         ul.append(li)
            //     }
            //     console.log(ul);
            //     cell_menu.append(ul)
            // })
        }
    }, [flag])
    
    function dropDown(e){
        e.preventDefault()
        setFlag(true)
        // const children = document.querySelectorAll('ul.subnav')
        // console.log(children);
        // for(let i = 0; i < children.length; i++){
        //     children[i].remove()
        // }
        // const cell_menu = e.currentTarget
        // console.log(cell_menu);
        // console.log(cell_menu.dataset.index);
        // const ul = document.createElement('ul')
        // ul.style.fontSize = '20px'
        // const cellIndex = dataMenu[cell_menu.dataset.index].submenu
        // console.log(cellIndex.length * 40);
        // ul.style.height = `${(cellIndex.length * 40) + 70}px`
        // ul.style.background = '#6b001c'
        // for(let i = 0; i < dataMenu[cell_menu.dataset.index].submenu.length; i++){
        //     const li = document.createElement('li')
        //     li.classList.add('subnav')
        //     const a = document.createElement('a')
        //     a.classList.add('a')
        //     a.href = dataMenu[cell_menu.dataset.index].submenu[i].link
        //     a.textContent = dataMenu[cell_menu.dataset.index].submenu[i].name
        //     li.append(a)
        //     ul.append(li)
        // }
        // console.log(ul);
        // cell_menu.append(ul)
    
    }

    function cleanMenu(e){
        e.preventDefault()
        const children = document.querySelectorAll('ul.subnav')
        console.log(children);
        for(let i = 0; i < children.length; i++){
            children[i].remove()
        }
    }

    return(
        <menu className={styles.menu} > 
            {dataMenu.map((item_menu, index) =>
             <div className={styles.cell_menu} 
             data-index={index} 
             key={index}
            //  onMouseOver={dropDown}
            //  onMouseOut={cleanMenu}
             >
                <div>
                    <a className={styles.link} 
                        href={item_menu.href} 
                        >{item_menu.title}
                    </a>
                </div>
                <div>
                    {console.log(item_menu.submenu)}
                    <div className={styles.submenu} style={{height: `${item_menu.submenu.length * 40}px`}}>
                        {/* {console.log(item_menu.submenu)} */}
                        {item_menu.submenu && item_menu.submenu.map((submenu, index) =>{
                            // {console.log(submenu)}
                            <div className={styles.li}><a href={submenu.link} className={styles.link} key={index}>{submenu.name}</a></div>
                        })}
                    </div>
                </div>
            </div>)}
        </menu>
    )
}