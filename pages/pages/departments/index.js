import { useState } from "react";
import CardDepartmens from "@/Components/Card";
import Layout from "@/pages/layout";
import styles from './index.module.scss'

const dataDepartments = [
    {
        title: 'Отдел обслуживания читальных залов, статистики и контроля',
        icon: '/front desk.svg',
        href: 'front_desk'
    },
    {
        title: 'Отдел хранения библиотечных фондов',
        icon: '/librarian.svg',
        href: 'librarian'
    },
    {
        title: 'Отдел научной обработки',
        icon: '/scientific_processing.svg',
        href: 'scientific_processing'
    },
    {
        title: 'Отдел научной информации',
        icon: '/scientific_information.svg',
        href: 'scientific_information'
    },
    {
        title: 'Центр визуальной информации',
        icon: '/visual_information.svg',
        href: 'visual_information'
    },
    {
        title: 'Отдел абонемента',
        icon: '/abonement.svg',
        href: 'abonement'
    },
    {
        title: 'Отдел научной библиографии',
        icon: '/scientific_bibliography.svg',
        href: 'scientific_bibliography'
    },
    {
        title: 'Отдел культурных программ',
        icon: '/cultural_programs.svg',
        href: 'cultural_programs'
    },
    {
        title: 'Центр информационных технологий',
        icon: '/information_technology.svg',
        href: 'information_technology'
    },
    {
        title: 'Отдел комплектования',
        icon: '/acquisition.svg',
        href: 'acquisition'
    }   
]

export default function DepartmentsPage() {

    return(
        <Layout>
            <div className={styles.wrapper}>
                <h1 className={styles.title} >Отделы библиотеки</h1>
                <main className={styles.departments_box}>
                    {dataDepartments.map((department, index) => <CardDepartmens
                    key={index}
                    icon={department.icon}
                    title={department.title}
                    href={department.href}
                    slug='pages/departments'
                    flag={true}
                    />)}
                </main>
            </div>
        </Layout>
    )
}