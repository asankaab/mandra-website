'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import styles from "./carousel.module.scss";

export default function Carousel({ srcList }: { srcList: Array<string> }) {
    return (
        <Swiper className={styles.swiper}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        loop={true}
        spaceBetween={50}
        centeredSlides={true}
        >
        {srcList.map((src: string, index: number) => (
            <SwiperSlide key={index} className="swiper-slide">
                <Image
                    src={src}
                    alt={"Slide Image-" + index}
                    fill
                    className={styles.heroImage}
                />
            </SwiperSlide>
        ))}
        <div className={styles.overlay}>
            <Image src="/triangle.svg" alt="Triangle" width={30} height={60} className={styles.triangle} />
            <Image src="/images/logo_faded.png" alt="Logo" width={350} height={350} />
        </div>
        </Swiper>
    )
}