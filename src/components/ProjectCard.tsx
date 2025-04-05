import Image from "next/image";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./projectcard.module.scss"
import Icon from "./ui/Icon";
import Link from "next/link";

export default async function ProjectCard({ href }: {href: string}) {
    
    return (
        <Link href={href} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <Heading2 bold>Natural light headshot/portrait but with the feel of a studio session</Heading2>
                    <Paragraph>From the bustling streets at dawn to the solitude of moonlit nights, Life in Light and Shadow is a visual journey that celebrates resilience and the profound connections between brightness and obscurity.</Paragraph>
                </div>
                <div className={styles.grid}>
                    <div className={styles.box}><Image className={styles.image} src={'/images/hero-1.jpg'} fill alt="image"/></div>
                    <div className={styles.box}><Image className={styles.image} src={'/images/hero-2.jpg'} fill alt="image"/></div>
                    <div className={styles.bottom}><Image className={styles.image} src={'/images/hero-3.jpg'} fill alt="image"/></div>
                    <div className={styles.arrow}>
                        <Icon name="arrow"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}