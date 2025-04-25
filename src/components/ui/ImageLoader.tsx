'use client'

import loaderFunction from "@/lib/imageloader"
import Image from "next/image"

interface ImagePropTypes {
        src: string, 
        width?: number, 
        height?: number,
        w?: number,
        radius?: 0 | 'max',
        fit?: 'pad'| 'fill' | 'scale' | 'crop' | 'thumb',
        focus?: 'center'| 'top' | 'right' | 'left' | 'bottom' | 'face' | 'faces',
        alt: string,
        unoptimize?: boolean,
        className?: string,
        style?: object,
        fill?: boolean,
        sizes?: string,
        priority?: boolean,
}

export default function ImageLoader({ src, width, height, w, radius, fit, 
    focus, alt, unoptimize, className, style, fill, sizes, priority = false } : ImagePropTypes) {

    const url = new URL(`https:${src}`)
    if (!unoptimize) {
        url.searchParams.set('fm', 'webp')
        url.searchParams.set('q', '85')
    }
    if (w) {
        url.searchParams.set('w', w.toString())
    }
    if (height) {
        url.searchParams.set('h', height.toString())
    }
    if (radius) {
        url.searchParams.set('r', radius.toString())
    }
    if (fit) {
        url.searchParams.set('fit', fit)
    }
    if (focus) {
        url.searchParams.set('f', focus)
    }

    return (
        <Image className={className} priority={priority} unoptimized={unoptimize} fill={fill} sizes={sizes} style={style} loader={loaderFunction} src={url.href} width={width} height={height} alt={alt}/>
    )
}