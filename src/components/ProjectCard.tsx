import Image from "next/image";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./projectcard.module.scss"

export default async function ProjectCard() {
    
    return (
        <div className={styles.card}>
            <div>
                <Heading2>Natural light headshot/portrait but with the feel of a studio session</Heading2>
                <Paragraph>From the bustling streets at dawn to the solitude of moonlit nights, Life in Light and Shadow is a visual journey that celebrates resilience and the profound connections between brightness and obscurity.</Paragraph>
            </div>
            <div>
                <div className={styles.box}><Image src={'/images/hero-1.jpg'} fill alt="image"/></div>
                <div className={styles.box}><Image src={'/images/hero-2.jpg'} fill alt="image"/></div>
                <div className={styles.box}><Image src={'/images/hero-3.jpg'} fill alt="image"/></div>
            </div>
        </div>
    )
}