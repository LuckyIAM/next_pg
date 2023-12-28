import { useEffect, useState } from 'react'
import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'

export default function HistoryPage() {
    const templatePage = useTemplatePage('/api/pages/history')

    useEffect(()=>{
        templatePage.GET()
    }, [])

    return(<>
    <Layout>
        {templatePage.getRendiring()}
    </Layout>
    </>
    )
}