import useTemplatePage from "@/hooks/useTemplatePage";
import Layout from "@/pages/layout";
import { useEffect } from "react";

export default function fundOfPublicationsOnMicrofiche() {
    const templatePage = useTemplatePage(`/api/pages/fund_of_publications_on_microfiche`, 'x')

    useEffect(() => {
        templatePage.GET()
    })
    return<Layout>
        {templatePage.getRendiring()}
    </Layout>
}