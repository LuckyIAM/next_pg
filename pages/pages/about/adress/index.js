import { useEffect} from 'react'
import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'

export default function AdressPage() {
    const templatePage = useTemplatePage('/api/pages/adress')

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