import useTemplatePage from "@/hooks/useTemplatePage";
import { useEffect } from "react";
import Layout from "@/pages/layout";


export default function PageOtdel() {
    const path = process.env.NEXT_PUBLIC_URL
    const templatePage = useTemplatePage(`${path}api/pages/departments/scientific_information`, 'Отдел научной информации')

    useEffect(() => {
        templatePage.GET()
    }, [])

    return(<Layout>
        {templatePage.getRendiring()}
    </Layout>
    )

}   