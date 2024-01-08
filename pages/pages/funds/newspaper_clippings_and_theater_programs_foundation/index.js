import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'
import { useEffect } from 'react'

export default function ReferanceAndInformationFundPage() {
    const templatePage = useTemplatePage(`/api/pages/newspaper_clippings_and_theater_programs_foundation`, 'Фонд газетных вырезок и театральных программ')

    useEffect(() => {
        templatePage.GET()
    },[])

    return <Layout>
        {templatePage.getRendiring()}
    </Layout>
}
