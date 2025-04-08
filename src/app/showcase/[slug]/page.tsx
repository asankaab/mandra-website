import PhotoGallery from '@/components/PhotoAlbum';
import styles from './page.module.scss';
import Heading1 from "@/components/ui/Heading1";
import Paragraph from '@/components/ui/Paragraph';
import { client } from "@/lib/client";
import { ProjectEntrySkeleton } from "@/lib/types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const projectQuery = await client.getEntries<ProjectEntrySkeleton>(
        { content_type: 'project', query: slug })

    const project = await projectQuery.items[0]
    
    return (
        <div className="wrapper">
            <div className="page-padding-block">
                <Heading1>{project.fields.title}</Heading1>
                <Paragraph>{project.fields.shortDescription}</Paragraph>
                {documentToReactComponents(project.fields.content)}
                <PhotoGallery media={project.fields.media} />
            </div>
        </div>
    )
}