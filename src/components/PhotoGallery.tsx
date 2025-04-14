'use client'

import Image from "next/image";
import { useState } from "react";
import "react-photo-album/masonry.css";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "./lightbox.css"
import { MasonryPhotoAlbum, RenderImageContext, RenderImageProps, RowsPhotoAlbum } from "react-photo-album";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { isImageFitCover, isImageSlide, useLightboxProps, useLightboxState } from "yet-another-react-lightbox";

function isNextJsImage(slide: SlideImage) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

function LightBoxNextJsImage({ slide, offset, rect }: { slide: SlideImage, offset: number, rect: { width: number, height: number } }) {
  const { on: { click }, carousel: { imageFit }, } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / (slide.height ?? 1)) * (slide.width ?? 1)),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / (slide.width ?? 1)) * (slide.height ?? 1)),
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide as unknown as string}
        loading="eager"
        draggable={false}
        placeholder={"blurDataURL" in slide ? "blur" : undefined}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}

function GalleryNextJsImage({ alt = "", title, sizes }: RenderImageProps, { photo, width, height }: RenderImageContext,) {
  
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function PhotoGallery({ media }: { media: Array<{ fields: { file: { url: string; details: { image: { width: number; height: number } } } } }> }) {

  const [index, setIndex] = useState(-1);

  const photos = media.map((item) => {
      return { src: "https:" + item.fields.file.url, width: item.fields.file.details.image.width, height: item.fields.file.details.image.height }
  })

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
        onClick={({ index: current })=> setIndex(current)}
        render={{ image: GalleryNextJsImage }}
      />
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
        render={{ slide: LightBoxNextJsImage }}
      />
    </>
  );
}