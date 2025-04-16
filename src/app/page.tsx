import Heading1 from "@/components/ui/Heading1";
import Heading2 from "@/components/ui/Heading2";
import styles from "./page.module.scss";
import Carousel from "@/components/Carousel";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import { client } from "@/lib/client";
import { BlogEntrySkeleton, HomepageEntrySkeleton, ProjectEntrySkeleton, ServicesEntrySkeleton, TeamEntrySkeleton } from "@/lib/types";
import MiniTitle from "@/components/ui/MiniTitle";
import ServiceBox from "@/components/ServiceBox";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import Icon from "@/components/ui/Icon";
import { getBlogData, getHomepageData, getServices, getShowcaseData, getTeam } from "./actions";
import ProjectCard from "@/components/ProjectCard";
import ImageLoader from "@/components/ui/ImageLoader";

export default async function Home() {

  const homepageData = await getHomepageData();
  const showcaseData = await getShowcaseData(2, 0)
  const blogData = await getBlogData(4, 0);
  const services = await getServices();
  const team = await getTeam(4);

  return (
  <>
    <main className={styles.main}>
      <div className="wrapper">
        <div className={styles.colLeft}>
          <div className={styles.textBox}>
            <Heading1 className={styles.text}>{homepageData.fields.mainHeading}</Heading1>
            <Heading2 bold className={styles.text}>{homepageData.fields.subHeading}</Heading2>
            <Paragraph className={styles.text}>{homepageData.fields.description}</Paragraph>
            <div className={styles.buttonContainer}>
                <Button href="showcase">Showcase</Button>
                <Button href="contact" varient="outline">Book Now</Button>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <p className={styles.socialText}>Connect with us</p>
            <div className="icon-container">
              {homepageData.fields.social.map((link: string) => {
                const name = link.split("/")[2].split(".")[0]
                return <a className="icon-link" target="blank" title={name} href={link} key={link}><Icon name={name}/></a>
              })}
              </div>
            </div>   
          </div>
        <div className={styles.colRight}>
          <Carousel imagesArray={homepageData.fields.heroImages} logo={homepageData.fields.brandLogo}/>
        </div>
      </div>
    </main>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Showcase</MiniTitle>
        <Heading1>Beautifully Capturing Human Memories.</Heading1>
        <div className={styles.cardContainer}>
            {showcaseData.items.map((projectEntry: ProjectEntrySkeleton) => {
              return (
                <ProjectCard entry={projectEntry} key={projectEntry.sys.id} />
              )
            })}
        </div>          
        <div className={styles.buttonWrapper}><Button href="showcase" varient="outline">See More Projects</Button></div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Our Style</MiniTitle>
        <Heading1>Elegant, Timeless, and artistic Photography Style</Heading1>
        <div className={styles.serviceContainer} >
          {services.items.map((item: ServicesEntrySkeleton, key: number) => {
            return (
              <ServiceBox key={item.sys.id} entry={item} number={key} />
            )
          })}
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Our Team</MiniTitle>
        <Heading1>Your Story, Our Vision, Perfectly Captured.</Heading1>
        <div className={styles.teamContainer}>
          {team.items.map( async(member: TeamEntrySkeleton, index: number) => {

            const data = await JSON.parse(JSON.stringify(member))
            const isEven = index % 2 === 0 ? true : false;

            return (
              <div key={index} className={isEven ? styles.memberBox : styles.memberBoxRight}>
                <div className={styles.imageBox}>
                    <ImageLoader focus="face" fit="thumb" src={data.fields.avatar?.fields.file.url} sizes="(max-width: 768px) 20vw, (max-width: 1360px) 33vw" fill alt={data.fields.name}/>
                </div>
                <div className={styles.textBox}>
                    <Heading2 bold>{data.fields.name}</Heading2>
                    <span className={styles.role}>
                      {member.fields.role.map((item, index) => {
                        return (
                            <span key={index}>{ index > 0 ? ' | ' + item : item.toString()}</span>
                        )
                      })}
                    </span>
                    <Paragraph>{data.fields.bio}</Paragraph>
                </div>
              </div>
            )
          })}
        </div>
            <Button varient="outline" href="about">Read More About Us</Button>
      </div>
    </section>
    <section className={styles.section}>
      <div className="wrapper">
        <MiniTitle>Blog</MiniTitle>
        <Heading1>Get Updated With Latest Content.</Heading1>
        <div className={styles.blogContainer}>
            {blogData.items.map((article: BlogEntrySkeleton)=> {
              return (
                <BlogCard entry={article} key={article.sys.id}/>
              )
            })}
        </div>
            <Button varient="outline" href="blog">Read Our Blog</Button>
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
          <svg width="361" height="346" viewBox="0 0 361 346" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M173.791 71.9838C201.275 71.9838 227.172 84.1675 246.151 103.214V103.27C246.151 94.1238 252.305 87.205 260.81 87.205H262.97C276.391 87.205 279.08 99.8613 279.08 103.855L279.136 245.999C278.202 255.314 288.755 260.129 294.616 254.144C317.397 230.71 344.701 133.555 280.43 77.305C220.49 24.8013 140.041 33.475 97.2683 62.95C51.807 94.36 22.7483 163.739 50.9745 228.944C81.7995 300.033 169.921 321.239 222.368 300.089C248.918 289.368 261.158 325.21 233.562 336.944C191.971 354.685 76.062 352.874 21.927 259.128C-14.6467 195.801 -12.7117 84.4038 84.3308 26.6913C158.502 -17.4875 256.366 -5.24749 315.361 56.3463C377.011 120.798 373.445 241.386 313.257 288.265C285.998 309.584 245.521 288.85 245.813 257.789L245.51 247.664C226.531 266.462 201.275 277.488 173.791 277.488C119.42 277.488 71.5508 229.608 71.5508 175.293C71.5508 120.393 119.42 72.0063 173.791 72.0063V71.9838ZM242.18 171.366C240.121 131.575 210.59 107.613 174.905 107.613H173.555C132.425 107.613 109.576 140.013 109.576 176.744C109.576 217.93 137.172 243.94 173.386 243.94C213.807 243.94 240.346 214.364 242.281 179.376L242.18 171.366Z" fill="#E6E6E6"/>
          </svg>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
