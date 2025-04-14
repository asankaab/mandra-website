import styles from "./blogcard.module.scss"
import Link from "next/link";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import Icon from "./ui/Icon";
import { BlogEntryType } from "@/lib/types";
import ImageLoader from "./ui/ImageLoader";

export default function BlogCard({ entry }: {entry: BlogEntryType}) {

    return (
        <Link href={'/blog/' + entry.fields.slug} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <Heading2>{entry.fields.title.toString()}</Heading2>
                    <Paragraph>{entry.fields.content.content[0].content[0].value}</Paragraph>
                </div>
                <div className={styles.imageBox}>
                    <ImageLoader className={styles.image} src={entry.fields.coverPhoto.fields.file.url} fill alt="image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <div className={styles.arrow}>
                    <Icon name="arrow"/>
                </div>
            </div>
        </Link>
    )
}