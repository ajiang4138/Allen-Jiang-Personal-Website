import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person, resume, routes } from "@/resources";
import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="24">
          <Row horizontal="center">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Featured Works
            </Heading>
          </Row>
          <Projects
            carouselItems={[
              "planetway-experience",
              "agile-communications-research",
              "wrappedify-spotify-summaries",
            ]}
            carouselInterval={8000}
          />
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Mailchimp />
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="24" paddingY="40">
          <Row fillWidth horizontal="center">
            <Line maxWidth={48} />
          </Row>
          <Column fillWidth gap="24" horizontal="center" align="center">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              View My Resume
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Check out my experience, skills, and achievements
            </Text>
            <Row gap="16" wrap horizontal="center">
              <Button
                data-border="rounded"
                href={resume.path}
                variant="primary"
                size="l"
                arrowIcon
              >
                View Resume
              </Button>
              <Button
                data-border="rounded"
                href="/images/Allen_Jiang_s_Resume_Spring_2026.pdf"
                variant="secondary"
                size="l"
                prefixIcon="filepdf"
                download="Allen_Jiang_Resume_2026.pdf"
              >
                Download PDF
              </Button>
            </Row>
          </Column>
          <Row fillWidth horizontal="center">
            <Line maxWidth={48} />
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
