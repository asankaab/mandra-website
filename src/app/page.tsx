import Heading1 from "@/components/ui/Heading1";
import Heading2 from "@/components/ui/Heading2";
import styles from "./page.module.scss";
import Carousel from "@/components/Carousel";
import Button from "@/components/ui/Button";

export default async function Home() {

  return (
  <>
    <main className={styles.main}>
      <div className="wrapper">
        <div className={styles.colLeft}>
          <Heading1 className={styles.text}>Making Every Moment Unforgettable.</Heading1>
          <Heading2 className={styles.text}>Welcome to our world of photography!</Heading2>
          <p className={styles.text}>Explore the interplay of light and shadow to create dramatic, moody, or ethereal photographs.</p>
          <div className={styles.buttonContainer}>
              <Button>Showcase</Button>
              <Button varient="outline">Book Now</Button>
            </div>
        </div>
        <div className={styles.colRight}>
          <Carousel srcList={["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg", "/images/hero-4.jpg", ]}/>
        </div>
      </div>
    </main>
    <section className={styles.section}>
      <div className="wrapper">
      </div>
    </section>
  </>
  );
}
