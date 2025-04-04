import Image from "next/image";
import Heading1 from "./ui/Heading1";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./servicebox.module.scss";

export default function ServiceBox() {
    return (
        <div className={styles.servicebox}>
            <Heading1>01</Heading1>
            <div className={styles.col2}>
                <Heading2>Graduation Portraits</Heading2>
                <Paragraph>Risus placerat ante nullam pretium velit placerat.</Paragraph>
            </div>
            <div className={styles.imagebox}>
                <Image src={'/images/hero-4.jpg'} fill alt=""/>
            </div>
        </div>
    )
}