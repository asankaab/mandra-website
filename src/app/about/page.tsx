import * as contentful from 'contentful';
import styles from './about.module.scss';
import { client } from '@/lib/client';
import Heading1 from '@/components/ui/Heading1';
import RichText from '@/components/ui/RichText';

export type AboutEntrySkeleton = {
  contentTypeId: "about"
  fields: {
    title: contentful.EntryFieldTypes.Text
    slug: contentful.EntryFieldTypes.Text
    shortDescription: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    media: Array<contentful.EntryFieldTypes.AssetLink>
  },
  sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
}

export default async function About() {

    const aboutQuery = await client.getEntry<AboutEntrySkeleton>('7qz9lmSfvNnKDz5iq7s2tO')
        const about = await JSON.parse(JSON.stringify(aboutQuery))
        
    return (
        <div className="wrapper">
            <div className={`page-padding-block ${styles.page}`}>
                <div className={styles.contentBox}>
                    <Heading1>{about.fields.title}</Heading1>
                    <RichText document={about.fields.content} />
                </div>
            </div>
        </div>
    )
}