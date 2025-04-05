import styles from "./blogcard.module.scss"
import Link from "next/link";
import Heading2 from "./ui/Heading2";
import Image from "next/image";
import Paragraph from "./ui/Paragraph";
import Icon from "./ui/Icon";

export default function BlogCard({ href }: {href: string}) {
    return (
        <Link href={href} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.textBox}>
                    <Heading2>Natural light headshot/portrait but with the feel of a studio session</Heading2>
                    <Paragraph>From the bustling streets at dawn to the solitude of moonlit nights, Life in Light and Shadow is a visual journey that celebrates resilience and the profound connections between brightness and obscurity.</Paragraph>
                </div>
                <div className={styles.imageBox}><Image className={styles.image} src={'/images/hero-3.jpg'} fill alt="image"/>
                </div>
                <div className={styles.arrow}>
                    <Icon name="arrow"/>
                </div>
            </div>
        </Link>
    )
}