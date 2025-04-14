import PhotoGallery from '@/components/PhotoGallery';
import styles from './page.module.scss';
import Heading1 from "@/components/ui/Heading1";
import Paragraph from '@/components/ui/Paragraph';
import { client } from "@/lib/client";
import { ProjectEntrySkeleton } from "@/lib/types";
import RichText from '@/components/ui/RichText';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const projectQuery = await client.getEntries<ProjectEntrySkeleton>(
        { content_type: 'project', query: slug })

    const project = await projectQuery.items[0]
    
    return (
        <div className="wrapper">
            <div className={`page-padding-block ${styles.page}`}>
                <div className={styles.contentBox}>
                    <Heading1>{project.fields.title}</Heading1>
                    <Paragraph className={styles.shortDescription}>{project.fields.shortDescription}</Paragraph>
                    <RichText document={project.fields.content} />
                </div>
                <div className={styles.gallery}>
                    <PhotoGallery media={project.fields.media} />
                </div>
            </div>
        </div>
    )
}