import Loading from "@/app/loading";
import Heading1 from "@/components/ui/Heading1";
import { client } from "@/lib/client";
import { ProjectEntrySkeleton } from "@/lib/types";
import { URLSearchParams } from "url";

export default async function ProjectPage({ params }: {params: URLSearchParams}) {
    const urlPara = await params;

    const projectData = await client.getEntries<ProjectEntrySkeleton>({ content_type: 'project', query: urlPara.project})
    
    return (
        <div className="wrapper">
            <Heading1>{projectData.items[0].fields.title}</Heading1>
        </div>
    )
}