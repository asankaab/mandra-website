import styles from "./blogcard.module.scss"
import Link from "next/link";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import Icon from "./ui/Icon";
import ImageLoader from "./ui/ImageLoader";
import { BlogEntrySkeleton } from "@/lib/types";

export default function BlogCard({ entry }: {entry: BlogEntrySkeleton}) {

    const data = JSON.parse(JSON.stringify(entry));

    return (
        <Link href={'/blog/' + data.fields.slug} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <Heading2>{data.fields.title}</Heading2>
                    <Paragraph>{data.fields.content.content[0].content[0].value}</Paragraph>
                </div>
                <div className={styles.imageBox}>
                    <ImageLoader className={styles.image} sizes="(max-width: 768px) 20vw, (max-width: 1360px) 33vw" src={data.fields.coverPhoto.fields.file.url} fill alt={data.fields.coverPhoto.fields.title}/>
                </div>
                <div className={styles.arrow}>
                    <Icon name="arrow"/>
                </div>
            </div>
        </Link>
    )
}