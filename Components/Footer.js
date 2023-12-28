import React from 'react'
import FooterMenu from './FooterMenu'
import styles from './Footer.module.scss'

const dataNavFooterRight = [
  {
    title: 'О библиотеке',
    href: '/'
  },
  {
    title: 'Услуги',
    href: '/'
  },
  {
    title: 'Фонды',
    href: '/'
  },
  {
    title: 'Каталоги',
    href: '/'
  },
  {
    title: 'Противодействие коррупции',
    href: '/'
  },

]

const dataNavFooterLeft = [
  {
    title: 'Новости',
    href: '/'
  },
  {
    title: 'Электронные ресурсы',
    href: '/'
  },
  {
    title: 'Галерея',
    href: '/'
  },
  {
    title: 'Контакты',
    href: '/'
  },
]

function Footer() {
  
  return (
    <>
    <div className={styles.footer} >
      <div className={styles.wraper_footer}>
        <div className='right_side'>
          <div className={styles.name}>
            © Федеральное государственное<br/>
            бюджетное учреждение культуры<br/>
            Российская государственная<br/>
            библиотека искусств<br/>
          </div>
          <div className={styles.email}><a href="mailto:bisk@liart.ru">bisk@liart.ru</a></div>
        </div>
        <div className={styles.nav}>
          {dataNavFooterRight.map((elem, index) => <FooterMenu
          key={index}
          title={elem.title}
          href={elem.href}
          />)}
        </div>
        <div className={styles.nav}>
          {dataNavFooterLeft.map((elem, index) => <FooterMenu
          key={index}
          title={elem.title}
          href={elem.href}
          />)}
        </div>
        <div className='adress'>
          <div className='href_location'>
          Наши адреса:
            <a className={styles.href_contact} href='/pages/contacts'> =Адреса на картах=</a>
          </div>
          {/* <div className={styles.legal_address}>
            Читальные залы:107031, <br/>
            Россия, Москва, Большая Дмитровка, 8/1
          </div> */}
          <div className={styles.actual_address}>
            Читальные залы:109189, <br/>
            Россия, Москва, ул. Николоямская 1, 4 этаж
          </div>
          <div className={styles.abonement}>
          Абонемент:127051, Россия, <br/>
          Москва, Петровские линии, д.1
          </div>

        </div>
      </div>
      <div className={styles.made_by}>
        Разработчик сайта: ООО «Открытые библиотечные системы», ПО «Библиопортал». Дизайн сайта: АНО Центр культуры и искусства «МедиаАртЛаб». При использовании материалов прямая ссылка на сайт www.liart.ru обязательна.<br/>
        Редизайн "LuckyIAM" и "FoxTail25"
      </div>
    </div>
    </>
  )
}

export default Footer