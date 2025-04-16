'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import styles from "./carousel.module.scss";
import ImageLoader from "./ui/ImageLoader";

export default function Carousel({ imagesArray, logo }: { imagesArray: { fields: { title: string; file: { url: string } } }[], logo?: string }) {
    
    const logoData = JSON.parse(JSON.stringify(logo))

    return (
        <Swiper className={styles.swiper}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        loop={true}
        spaceBetween={50}
        centeredSlides={true}
        >
        {imagesArray.map((url: { fields: { title: string, file: { url: string }}}, index: number) => (
            <SwiperSlide key={index} className="swiper-slide">
                <ImageLoader
                    src={url.fields.file.url}
                    alt={url.fields.title}
                    fill
                    className={styles.heroImage}
                />
            </SwiperSlide>
        ))}
        <div className={styles.overlay}>
            <ImageLoader src={logoData.fields.file.url} width={400} height={400} alt={logoData.fields.title} unoptimize sizes="(min-width: 1360px) 50vw, 100vw"/>
        </div>
        </Swiper>
    )
}