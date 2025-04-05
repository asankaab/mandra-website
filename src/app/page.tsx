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
import ServiceBox from "@/components/ServiceBox";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import Icon from "@/components/ui/Icon";

export default async function Home() {

  // const homepageData = await client.getEntry<HomepageEntrySkeleton>('4enTabsbalVOcWNbC0sfYw')

  return (
  <>
    <main className={styles.main}>
      <div className="wrapper">
        <div className={styles.colLeft}>
          <div className={styles.textBox}>
            <Heading1 className={styles.text}>homepageData fields mainHeading</Heading1>
            <Heading2 bold className={styles.text}>Welcome to our world of photography!</Heading2>
            <Paragraph className={styles.text}>Explore the interplay of light and shadow to create dramatic, moody, or ethereal photographs.</Paragraph>
            <div className={styles.buttonContainer}>
                <Button href="showcase">Showcase</Button>
                <Button href="contact" varient="outline">Book Now</Button>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <p className={styles.socialText}>Connect with us</p>
            <div className={styles.icons}>
                <a title="facebook" href="https://facebook.com/#"><Icon name="arrow" color="red"/></a>
                <a title="instagram" href="https://instagram.com/#"><Icon name="facebook"/></a>
                <a title="youtube" href="https://youtube.com/#"><Icon name="facebook"/></a>
                <a title="flickr" href="https://flickr.com/#"><Icon name="facebook"/></a>
              </div>
            </div>   
          </div>
        <div className={styles.colRight}>
          <Carousel srcList={["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg", "/images/hero-4.jpg", ]}/>
        </div>
      </div>
    </main>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Showcase</MiniTitle>
        <Heading1>Beautifully Capturing Human Memories.</Heading1>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainer}>
            <ProjectCard href="#"/>
          </div>
          <Button varient="outline">See More Projects</Button>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Our Style</MiniTitle>
        <Heading1>Elegant, Timeless, and artistic Photography Style</Heading1>
        <div className={styles.serviceContainer}>
            <ServiceBox/>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Our Team</MiniTitle>
        <Heading1>Your Story, Our Vision, Perfectly Captured.</Heading1>
        <div className={styles.teamContainer}>
            <div className={styles.imageBox}>
                <Image src={'/images/hero-4.jpg'} fill alt=""/>
            </div>
            <div className={styles.col2}>
                <Heading2 bold>Marshall Greenholt</Heading2>
                <Paragraph>Marshall Greenholt is a visionary photographer known for his remarkable ability to capture the extraordinary in everyday moments. Through his lens, he weaves stories that blend artistic expression with a keen eye for detail.
Specializing in Marshalls work stands out for its, making his portfolio both diverse and captivating.</Paragraph>
            </div>
        </div>
            <Button varient="outline">Read More About Us</Button>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Blog</MiniTitle>
        <Heading1>Get Updated With Latest Content.</Heading1>
        <div className={styles.blogContainer}>
            <BlogCard href="#"/><BlogCard href="#"/><BlogCard href="#"/><BlogCard href="#"/>
        </div>
            <Button varient="outline">Read Our Blog</Button>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.formContainer}>
          <div>
            <Heading2 bold>Join the mailing list!</Heading2>
            <Paragraph>Sign up for our mailing list for occasional updates, seasonal offers, and special events!</Paragraph>
            <NewsletterForm/>
          </div>
          <div className={styles.bg}>
            <Image src={'/images/at-symbol.svg'} width={400} height={300} alt="background" />
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
