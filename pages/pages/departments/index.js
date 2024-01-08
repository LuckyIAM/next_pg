import CardDepartmens from "@/Components/Card";
import useTemplateLinkPage from '@/hooks/useTemplateLinkPage'
import Layout from "@/pages/layout";
import styles from './index.module.scss'

const dataDepartments = [
    {
        name: 'Отдел обслуживания читальных залов, статистики и контроля',
        icon: '/front desk.svg',
        link: 'front_desk'
    },
    {
        name: 'Отдел хранения библиотечных фондов',
        icon: '/librarian.svg',
        link: 'librarian'
    },
    {
        name: 'Отдел научной обработки',
        icon: '/scientific_processing.svg',
        link: 'scientific_processing'
    },
    {
        name: 'Отдел научной информации',
        icon: '/scientific_information.svg',
        link: 'scientific_information'
    },
    {
        name: 'Центр визуальной информации',
        icon: '/visual_information.svg',
        link: 'visual_information'
    },
    {
        name: 'Отдел абонемента',
        icon: '/abonement.svg',
        link: 'abonement'
    },
    {
        name: 'Отдел научной библиографии',
        icon: '/scientific_bibliography.svg',
        link: 'scientific_bibliography'
    },
    {
        name: 'Отдел культурных программ',
        icon: '/cultural_programs.svg',
        link: 'cultural_programs'
    },
    {
        name: 'Центр информационных технологий',
        icon: '/information_technology.svg',
        link: 'information_technology'
    },
    {
        name: 'Отдел комплектования',
        icon: '/acquisition.svg',
        link: 'acquisition'
    }   
]

export default function DepartmentsPage() {
    const linkPage = useTemplateLinkPage(dataDepartments, 'Отделы библиотеки', '/pages/departments/')
    return(
        <Layout>
            {/* Template with icon */}
            {/* <div className={styles.wrapper}>
                <h1 className={styles.title} >Отделы библиотеки</h1>
                <main className={styles.departments_box}>
                    {dataDepartments.map((department, index) => <CardDepartmens
                    key={index}
                    icon={department.icon}
                    title={department.name}
                    href={department.link}
                    slug='pages/departments'
                    flag={true}
                    />)}
                </main>
            </div> */}
            {/* Template with out icon */}
            {linkPage.getRendiring()}
        </Layout>
    )
}