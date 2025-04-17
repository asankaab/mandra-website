import Heading1 from '@/components/ui/Heading1';
import styles from './page.module.scss';
import { client } from "@/lib/client";
import { DynamicPageEntrySkeleton } from "@/lib/types";
import RichText from '@/components/ui/RichText';
import Footer from '@/components/Footer';

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const pageQuery = await client.getEntries<DynamicPageEntrySkeleton>(

        { content_type: 'dynamicPage', query: slug })

        const data = await JSON.parse(JSON.stringify(pageQuery));

        const page = await data.items[0];
        
    return (
        <>
            <div className="wrapper">
                <div className={`page-padding-block ${styles.page}`}>
                    <div className={styles.contentBox}>
                        <Heading1>{page.fields?.title}</Heading1>
                        <RichText document={page.fields?.content} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}