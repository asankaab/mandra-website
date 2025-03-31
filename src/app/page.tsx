import Heading1 from "@/components/ui/Heading1";
import Heading2 from "@/components/ui/Heading2";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel";

export default async function Home() {

  return (
    <main>
        <div className="boxContainer">
          <div className={styles.box}>
            <div className="wrapper">
              <Heading1 className="text-center">Making Every Moment Unforgettable.</Heading1>
              <Heading2 className="text-center">Welcome to our world of photography!</Heading2>
              <p className="text-center">Explore the interplay of light and shadow to create dramatic, moody, or ethereal photographs.</p>
            </div>
          </div>
          <div className={styles.bg}>
            <Carousel srcList={["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg", "/images/hero-4.jpg", ]}/>
          </div>
      </div>
    </main>
  );
}
