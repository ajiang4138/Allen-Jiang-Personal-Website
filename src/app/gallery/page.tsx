import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";
import { Column, Heading, Meta, RevealFx, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="4" fillWidth horizontal="center">
        <Heading marginBottom="8" variant="heading-strong-xl" align="center">
          {gallery.title}
        </Heading>
      </RevealFx>
      <RevealFx translateY="6" delay={0.1} fillWidth horizontal="center">
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          Click an image to view its caption!
        </Text>
      </RevealFx>
      <RevealFx translateY="4" fillWidth>
        <GalleryView />
      </RevealFx>
    </Column>
  );
}
