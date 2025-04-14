import Image from "next/image";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./projectcard.module.scss"
import Icon from "./ui/Icon";
import Link from "next/link";
import { ProjectEntryType } from "@/lib/types";
import ImageLoader from "./ui/ImageLoader";

export default function ProjectCard({ entry } : { entry: ProjectEntryType } ) {
    return (
        <Link href={"showcase/" + entry.fields.slug} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <div>
                        <Heading2 bold>{entry.fields.title}</Heading2>
                        <Paragraph>{entry.fields.shortDescription}</Paragraph>
                    </div>
                    <div className={styles.date}><p>{entry.sys.createdAt.split('T')[0]}</p></div>
                </div>
                <div className={styles.grid}>
                    {entry.fields.media.slice(0,3).map((imageEntry, index) => {
                        return (
                            <div key={imageEntry.sys.id} className={index === 2 ? styles.bottom : styles.box}>
                                <ImageLoader className={styles.image} src={imageEntry.fields.file.url} 
                                fill alt={imageEntry.fields.title}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
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