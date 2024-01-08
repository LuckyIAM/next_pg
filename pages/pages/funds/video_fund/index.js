import Layout from "@/pages/layout";
import useTemplatePage from "@/hooks/useTemplatePage";
import { useEffect } from "react";

export default function StorageDepartment() {
    const templatePage = useTemplatePage(`/api/pages/video_fund`, 'Видеофонд')
    useEffect(() => {
        templatePage.GET()
    }, [])

    return <Layout>
        {templatePage.getRendiring()}
    </Layout>
}