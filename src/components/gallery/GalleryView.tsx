"use client";

import { gallery } from "@/resources";
import { MasonryGrid, Media, Text } from "@once-ui-system/core";
import { useState } from "react";

const galleryImageVersion = process.env.NEXT_PUBLIC_GALLERY_IMAGE_VERSION ?? "2026-02-19";

const withCacheVersion = (src: string) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${galleryImageVersion}`;
};

export default function GalleryView() {
  const [activeCaptionIndex, setActiveCaptionIndex] = useState<number | null>(null);

  const toggleCaption = (index: number) => {
    setActiveCaptionIndex((current) => (current === index ? null : index));
  };

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => {
        const src = withCacheVersion(image.src);
        const isCaptionVisible = activeCaptionIndex === index;

        return (
          <div key={`${image.src}-${index}`}>
            <button
              type="button"
              onClick={() => toggleCaption(index)}
              aria-expanded={isCaptionVisible}
              aria-label={`Toggle caption for ${image.alt}`}
              style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}
            >
              <Media
                priority={index < 10}
                sizes="(max-width: 560px) 100vw, 50vw"
                radius="m"
                aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
                src={src}
                alt={image.alt}
              />
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isCaptionVisible ? "120px" : "0px",
                opacity: isCaptionVisible ? 1 : 0,
                transform: isCaptionVisible ? "translateY(0px)" : "translateY(-6px)",
                transition: "max-height 240ms ease, opacity 200ms ease, transform 240ms ease",
              }}
            >
              <Text variant="body-default-s" onBackground="neutral-weak" marginTop="8">
                {image.caption}
              </Text>
            </div>
          </div>
        );
      })}
    </MasonryGrid>
  );
}
