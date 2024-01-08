import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'
import { useEffect } from 'react'

export default function ReferanceAndInformationFundPage() {
    const templatePage = useTemplatePage(`/api/pages/department_of_iconographic_materials`, 'Фонд изобразительных материалов')

    useEffect(() => {
        templatePage.GET()
    },[])

    return <Layout>
        {templatePage.getRendiring()}
    </Layout>
}
