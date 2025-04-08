'use client'

import "react-photo-album/masonry.css";
import Image from "next/image";
import {
    MasonryPhotoAlbum,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(
    { alt = "", title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext,
  ) {
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
          src={photo}
          alt={alt}
          title={title}
          sizes={sizes}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
        />
      </div>
    );
  }

  export default function PhotoGallery({ media }: { media: Array<{ fields: { file: { url: string; details: { image: { width: number; height: number } } } } }> }) {

    const photos = media.map((item) => {
        return { src: "https:" + item.fields.file.url, width: item.fields.file.details.image.width, height: item.fields.file.details.image.height }
    })


    return (
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
    );
  }