import Heading1 from "./ui/Heading1";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import styles from "./servicebox.module.scss";
import ImageLoader from "./ui/ImageLoader";
import { ServicesEntrySkeleton } from "@/lib/types";

export default function ServiceBox({entry, number, className}: {entry: ServicesEntrySkeleton, number: number, className: string}) {

    const data = JSON.parse(JSON.stringify(entry));

    return (
        <div className={styles.servicebox+" "+className}>
            <Heading1 className={styles.number}>{ number < 10 ? '0' + ( number + 1 ) : number + 1 }</Heading1>
            <div className={styles.textBox}>
                <Heading2>{data.fields.title}</Heading2>
                <Paragraph>{data.fields.description}</Paragraph>
            </div>
            <div className={styles.imageBox}>
                <ImageLoader fit="fill" focus="face" fill w={600}
                sizes="(max-width: 768px) 20vw, (max-width: 1360px) 33vw"
                src={data.fields.image.fields.file.url} alt={data.fields.image.fields.title}/>
            </div>
        </div>
    )
}