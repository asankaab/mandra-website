'use client'

import loaderFunction from "@/lib/imageloader"
import Image from "next/image"

interface ImagePropTypes {
        src: string, 
        width?: number, 
        height?: number,
        radius?: 0 | 'max',
        fit?: 'pad'| 'fill' | 'scale' | 'crop' | 'thumb',
        focus?: 'center'| 'top' | 'right' | 'left' | 'bottom' | 'face' | 'faces',
        alt: string,
        unoptimize?: boolean,
        className?: string,
        style?: object,
        fill?: boolean
}

export default function ImageLoader({ src, width, height, radius, fit, 
    focus, alt, unoptimize, className, style, fill } : ImagePropTypes) {

    const url = new URL(`https:${src}`)
    if (!unoptimize) {
        url.searchParams.set('fm', 'webp')
        url.searchParams.set('q', '85')
    }
    if (width) {
        url.searchParams.set('w', width.toString())
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
        <Image className={className} unoptimized={unoptimize} fill={fill} style={style} loader={loaderFunction} src={url.href} width={width} height={height} alt={alt}/>
    )
}