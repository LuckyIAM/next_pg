import Layout from "@/pages/layout";
import useTemplatePage from "@/hooks/useTemplatePage";
import { useEffect } from "react";

export default function ServicesPage() {
    const path =  process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/services`)
    useEffect(() => {
        templatePage.GET()
    }, [])

    return <Layout>
        {templatePage.getRendiring()}
    </Layout>
}