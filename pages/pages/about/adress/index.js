import { useEffect} from 'react'
import useTemplatePage from '@/hooks/useTemplatePage'
import Layout from '@/pages/layout'

export default function AdressPage() {
    const path = process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/adress`, 'Адрес и время работы РГБИ')
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