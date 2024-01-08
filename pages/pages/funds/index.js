import useTemplateLinkPage from '@/hooks/useTemplateLinkPage'
import Layout from '@/pages/layout'

const dataPage = [
    {
        name: 'Основной фонд',
        link: '/pages/funds/storage_department'
    },
    {
        name: 'Справочно-информационный фонд',
        link: '/pages/funds/reference_and_information_fund'
    },
    {
        name: 'Фонд изобразительных материалов',
        link: '/pages/funds/department_of_iconographic_materials'
    },
    {
        name: 'Фонд отдела Абонемента',
        link: '/pages/funds/subscription_department_fund'
    },
    {
        name: 'Фонд газетных вырезок и театральных программ',
        link: '/pages/funds/newspaper_clippings_and_theater_programs_foundation'
    },
    {
        name: 'Видеофонд',
        link: '/pages/funds/video_fund'
    },
    {
        name: 'Фонд изданий на микрофишах',
        link: '/pages/funds/fund_of_publications_on_microfiche'
    },
    {
        name: 'Архивный фонд',
        link: '/pages/funds/archive_fund'
    },
]

export default function FundsPage() {
    const linkPage = useTemplateLinkPage(dataPage, 'Фонды')

    return<Layout>
        {linkPage.getRendiring()}
    </Layout>
}