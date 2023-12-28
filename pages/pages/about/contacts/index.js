import { useEffect, useState } from 'react'
import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'


export default function ContactsPage() {
    const templatePage = useTemplatePage('/api/pages/contacts')

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