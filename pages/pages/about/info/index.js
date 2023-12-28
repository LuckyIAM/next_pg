import { useEffect } from "react"
import useTemplatePage from "@/hooks/useTemplatePage"
import Layout from "@/pages/layout"


export default function InfoPage() {
    const templatePage = useTemplatePage('/api/pages/info')

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