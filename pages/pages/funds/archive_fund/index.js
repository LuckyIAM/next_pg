import useTemplatePage from "@/hooks/useTemplatePage";
import Layout from "@/pages/layout";
import { useEffect } from "react";

export default function ArchiveFundPage(){
    const templatePage = useTemplatePage(`/api/pages/archive_fund`, 'Архивный фонд')
    useEffect(() => {
        templatePage.GET()
    },[])    
    return<Layout>
        {templatePage.getRendiring()}
    </Layout>
}