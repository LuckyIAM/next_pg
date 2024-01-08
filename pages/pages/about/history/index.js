import { useEffect, useState } from 'react'
import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'

export default function HistoryPage() {
    const path = process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/history`, 'Из истории РГБИ')

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