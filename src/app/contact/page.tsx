import * as contentful from 'contentful';
import styles from './contact.module.scss';
import { client } from '@/lib/client';
import Heading1 from '@/components/ui/Heading1';
import Paragraph from '@/components/ui/Paragraph';
import RichText from '@/components/ui/RichText';

export type ContactEntrySkeleton = {
  contentTypeId: "contact"
  fields: {
    title: contentful.EntryFieldTypes.Text
    slug: contentful.EntryFieldTypes.Text
    shortDescription: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    media: Array<contentful.EntryFieldTypes.AssetLink>
  },
  sys: { id: string, createdAt: contentful.EntryFieldTypes.Date }
}

export default async function Contact() {

    const contactQuery = await client.getEntry<ContactEntrySkeleton>('76WVnRHmn7FesVhI3o5aG6')
        const contact = await JSON.parse(JSON.stringify(contactQuery))
        
    return (
        <div className="wrapper">
            <div className={`page-padding-block ${styles.page}`}>
                <div className={styles.contentBox}>
                    <Heading1>{contact.fields.title}</Heading1>
                    <RichText document={contact.fields.content} />
                    <div className={styles.contactBox}>
                        <Paragraph bold>{contact.fields.phone}</Paragraph>
                        <Paragraph bold>{contact.fields.email}</Paragraph>
                        <Paragraph bold>{contact.fields.address}</Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}