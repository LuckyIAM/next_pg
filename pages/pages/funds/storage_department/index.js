import Layout from "@/pages/layout";
import useTemplatePage from "@/hooks/useTemplatePage";
import { useEffect } from "react";

export default function StorageDepartment() {
    const path =  process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/storage_department`, 'Отдел хранения библиотечных фондов')
    useEffect(() => {
        templatePage.GET()
    }, [])

    return <Layout>
        {templatePage.getRendiring()}
    </Layout>
}