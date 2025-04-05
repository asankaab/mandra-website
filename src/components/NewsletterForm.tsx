import styles from "./newsletterform.module.scss"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function NewsletterForm() {
    return (
        <form action={""} className={styles.form}>
            <Input type="text" name="name" id="" placeholder="name" />
            <Input type="text" name="email" id="" placeholder="Enter your email" />
            <Button type="submit">Get Updates!</Button>
        </form>
    )
}