import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'
import { useEffect } from 'react'

export default function ReferanceAndInformationFundPage() {
    const templatePage = useTemplatePage(`/api/pages/reference_and_information_fund`, 'Справочно-информационный фонд')

    useEffect(() => {
        templatePage.GET()
    },[])

    return <Layout>
        {templatePage.getRendiring()}
    </Layout>
}
