import Layout from '@/pages/layout'
import useTemplateLinkPage from '@/hooks/useTemplateLinkPage'

const dataPage = [
    {
        name: 'Адрес и время работы РГБИ',
        link: '/pages/about/adress'
    },
    {
        name: 'Запись читателей',
        link: '/pages/about/reader_entry'
    },
    {
        name: 'Общая информация',
        link: '/pages/about/info'
    },
    {
        name: 'Из истории РГБИ',
        link: '/pages/about/history'
    },
    {
        name: 'Структура библиотеки',
        link: '/'
    },
    {
        name: 'Реквизиты библиотеки',
        link: '/'
    },
    {
        name: 'Нормативные документы',
        link: '/'
    },
    {
        name: 'Попечительский совет',
        link: '/'
    },
    {
        name: 'Противодействие коррупции',
        link: '/'
    },
]

export default function AboutLibraryPage() {
    const linkPage = useTemplateLinkPage(dataPage, 'О библиотеке')

    return(<Layout>
        {linkPage.getRendiring()}
        </Layout>
    )
}