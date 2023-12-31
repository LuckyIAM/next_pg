import { useEffect } from "react"
import useTemplatePage from "@/hooks/useTemplatePage"
import Layout from "@/pages/layout"


export default function InfoPage() {
    const path = process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/info`, 'Общая информация')

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