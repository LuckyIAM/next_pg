import { useEffect } from "react"
import useTemplatePage from "@/hooks/useTemplatePage"
import Layout from "@/pages/layout"

export default function PageReaderEtry() {
    const path = process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/board_of_trustees`)

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