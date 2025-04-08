import Image from "next/image";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./projectcard.module.scss"
import Icon from "./ui/Icon";
import Link from "next/link";

export default async function ProjectCard({ title, description, href, media, date }: {title: string, description: string, href: string, media: Array<{ fields: { title: string, file: { url: string }}}>, date: string}) {
    return (
        <Link href={"showcase/" + href} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <div>
                        <Heading2 bold>{title}</Heading2>
                        <Paragraph>{description}</Paragraph>
                    </div>
                    <div className={styles.date}><p>{date.split('T')[0]}</p></div>
                </div>
                <div className={styles.grid}>
                    {media.slice(0,3).map((imageEntry, index) => {
                        return (
                            <div key={imageEntry.fields.title} className={index === 2 ? styles.bottom : styles.box}>
                                <Image className={styles.image} src={"https:" + imageEntry.fields.file.url} fill alt={imageEntry.fields.title}/>
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