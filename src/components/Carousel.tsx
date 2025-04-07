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


export default function Carousel({ imagesArray }: { imagesArray: { fields: { title: string; file: { url: string } } }[] }) {
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
                <Image
                    src={"https:" + url.fields.file.url}
                    alt={"Slide Image-" + index}
                    fill
                    className={styles.heroImage}
                />
            </SwiperSlide>
        ))}
        <div className={styles.overlay}>
            <Image src="/images/logo_faded.png" alt="Logo" width={350} height={350} />
        </div>
        </Swiper>
    )
}