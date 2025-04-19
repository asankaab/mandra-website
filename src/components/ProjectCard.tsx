import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./projectcard.module.scss"
import Icon from "./ui/Icon";
import Link from "next/link";
import ImageLoader from "./ui/ImageLoader";
import { ProjectEntrySkeleton } from "@/lib/types";

export default function ProjectCard({ entry, className } : { entry: ProjectEntrySkeleton, className?: string } ) {

    const data = JSON.parse(JSON.stringify(entry));

    return (
        <Link href={"showcase/" + data.fields.slug} className={styles.link + " " + className}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <div>
                        <Heading2 bold>{data.fields.title}</Heading2>
                        <Paragraph>{data.fields.shortDescription}</Paragraph>
                    </div>
                    <div className={styles.date}><p>{entry.sys.createdAt.split('T')[0]}</p></div>
                </div>
                <div className={styles.grid}>
                    {data.fields.media.slice(0,3).map((imageEntry: {sys: {id: string}, fields: {title: string, file: {url: string}}}, index: number) => {
                        return (
                            <div key={imageEntry.sys.id} className={index === 2 ? styles.bottom : styles.box}>
                                <ImageLoader className={styles.image} src={imageEntry.fields.file.url} 
                                fill sizes="(max-width: 768px) 20vw, 33vw" alt={imageEntry.fields.title}/>
                            </div>
                        )
                    })}
                    <div className={styles.arrow}>
                        <Icon name="arrow"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}