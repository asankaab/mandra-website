import Heading1 from "@/components/ui/Heading1";
import Heading2 from "@/components/ui/Heading2";
import styles from "./page.module.scss";
import Carousel from "@/components/Carousel";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import { client } from "@/lib/client";
import { HomepageEntrySkeleton } from "@/lib/types";
import MiniTitle from "@/components/ui/MiniTitle";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {

  // const homepageData = await client.getEntry<HomepageEntrySkeleton>('4enTabsbalVOcWNbC0sfYw')

  return (
  <>
    <main className={styles.main}>
      <div className="wrapper">
        <div className={styles.colLeft}>
          <div className={styles.textBox}>
            <Heading1 className={styles.text}>homepageData fields mainHeading</Heading1>
            <Heading2 className={styles.text}>Welcome to our world of photography!</Heading2>
            <Paragraph className={styles.text}>Explore the interplay of light and shadow to create dramatic, moody, or ethereal photographs.</Paragraph>
            <div className={styles.buttonContainer}>
                <Button href="/showcase">Showcase</Button>
                <Button varient="outline">Book Now</Button>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <p className={styles.socialText}>Connect with us</p>
            <div className={styles.icons}>
              <a title="facebook" href="https://facebook.com/#"><Image className="icon" src="/icons/facebook.svg" width={25} height={25} alt="facebook"/></a>
              <a title="instagram" href="https://instagram.com/#"><Image className="icon" src="/icons/instagram.svg" width={25} height={25} alt="instagram"/></a>
              <a title="youtube" href="https://youtube.com/#"><Image className="icon" src="/icons/youtube.svg" width={25} height={25} alt="youtube"/></a>
              <a title="flickr" href="https://flickr.com/#"><Image className="icon" src="/icons/flickr.svg" width={25} height={25} alt="flickr"/></a>          </div>
            </div>   
          </div>
        <div className={styles.colRight}>
          <Carousel srcList={["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg", "/images/hero-4.jpg", ]}/>
        </div>
      </div>
    </main>
    <section className={styles.showcaseSection}>
      <div className="wrapper">
        <MiniTitle>Showcase</MiniTitle>
        <Heading1>Beautifully Capturing Human Memories.</Heading1>
        <div className={styles.cardContainer}>
          <ProjectCard/>
        </div>
      </div>
    </section>
  </>
  );
}
