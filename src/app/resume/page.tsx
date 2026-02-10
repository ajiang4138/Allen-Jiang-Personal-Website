import { about, baseURL, person, resume } from "@/resources";
import { Button, Column, Flex, Heading, Line, List, Meta, Row, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
    return Meta.generate({
        title: resume.title,
        description: resume.description,
        baseURL: baseURL,
        image: `/api/og/generate?title=${encodeURIComponent(resume.title)}`,
        path: resume.path,
    });
}

export default function Resume() {
    return (
    <Column maxWidth="m" paddingTop="40" gap="48">
        <Schema
            as="webPage"
            baseURL={baseURL}
            path={resume.path}
            title={resume.title}
            description={resume.description}
            image={`/api/og/generate?title=${encodeURIComponent(resume.title)}`}
            author={{
                name: person.name,
                url: `${baseURL}${about.path}`,
                image: `${baseURL}${person.avatar}`,
            }}
        />
    
        {/* Page Title */}
        <Flex fillWidth vertical="center" horizontal="center">
            <Heading variant="display-strong-s" onBackground="neutral-weak">
                {resume.label}
            </Heading>
        </Flex>

        {/* Information Section */}
        <Column fillWidth gap="12" horizontal="center" marginTop="-32">
            <Heading variant="display-strong-l">
                {person.name}
            </Heading>
            <Row gap="16" vertical="center" wrap horizontal="center">
                <Text variant="body-default-m" onBackground="neutral-weak">ajiang4138@gmail.com</Text>
                <Line background="neutral-alpha-medium" vert height="12" />
                <Text variant="body-default-m" onBackground="neutral-weak">718-887-5269</Text>
                <Line background="neutral-alpha-medium" vert height="12" />
                <Text variant="body-default-m" onBackground="neutral-weak">linkedin.com/in/allen-jiang4138/</Text>
                <Line background="neutral-alpha-medium" vert height="12" />
                <Text variant="body-default-m" onBackground="neutral-weak">github.com/ajiang4138</Text>
            </Row>
        </Column>
        
        {/* Education Section */}
        <Column fillWidth gap="24">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Education</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>
            <Column gap="8">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1}>
                        <Text variant="body-strong-l">Georgia Institute of Technology</Text>
                    </Column>
                    <Column horizontal="end" style={{ whiteSpace: 'nowrap' }}>
                        <Text variant="body-default-m" onBackground="neutral-weak">May 2026</Text>
                        <Text variant="body-default-m" weight="strong">GPA: 3.7</Text>
                    </Column>
                </Row>
                <Column gap="4">
                    <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Bachelor of Science in Computer Science</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">Relevant Coursework: Machine Learning & AI, Robotics and Perception, Systems & Networking, Computer Networking, Databases, Android Development</Text>
                </Column>
            </Column>
        </Column>

        {/* Experience Section */}
        <Column fillWidth gap="24">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Experience</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Software Engineer @ Planetway</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Planetway</Text>
                    </Column>
                    <Column horizontal="end" style={{ whiteSpace: 'nowrap' }}>
                        <Text variant="body-default-m" onBackground="neutral-weak">June 2025 - Present</Text>
                        <Text variant="body-default-s" onBackground="neutral-alpha-medium">Remote</Text>
                    </Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Developed a responsive frontend using Next.js, TypeScript, and Tailwind CSS deployed on Vercel, enabling the interactive visualization of over 8,000 monthly sustainability data points.</Text>
                    <Text variant="body-default-m">Engineered a scalable Supabase backend, implementing Row Level Security and optimizing SQL queries to ensure sub-second data retrieval latency.</Text>
                </List>
            </Column>
        </Column>

        {/* Projects Section */}
        <Column fillWidth gap="24">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Projects</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>

            {/* AI Image Compression */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">AI-powered Image Compression</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">PyTorch, Stable Diffusion, CLIP</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">Jan 2025 - Present</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Developed a semantic communications framework reducing image transmission size by 90% while maintaining 95% visual accuracy.</Text>
                </List>
            </Column>

            {/* Flight Connection Predictor */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Flight Connection Risk Predictor</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Python, XGBoost, Pandas</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">Nov 2025</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Analyzed 15M+ flight records to predict missed connections with 90% accuracy using machine learning.</Text>
                </List>
            </Column>

            {/* Carbon Tracker */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Carbon Tracker</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">React, Supabase, Vercel</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">June 2025</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Collaborated with Planetway to build a secure company-wide carbon footprint tracking platform.</Text>
                </List>
            </Column>

            {/* Wrappedify */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Wrappedify App</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Android, Spotify API, Firebase</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">April 2024</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Leveraged Spotify API to generate on-demand music summaries with a social sharing feed.</Text>
                </List>
            </Column>
        </Column>

        {/* PDF Section */}
        <Column fillWidth gap="24" paddingTop="24" marginBottom="64">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Full PDF Document</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>
            <Flex 
                fillWidth 
                background="neutral-alpha-weak" 
                radius="l" 
                overflow="hidden"
                border="neutral-alpha-weak"
                style={{ aspectRatio: '1 / 1.414', position: 'relative' }}
            >
                <iframe
                    src="/images/Allen_Jiang_s_Resume_Spring_2026.pdf#view=FitH&toolbar=0"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
                    title="Allen Jiang Resume PDF"
                />
            </Flex>
            <Flex horizontal="center" marginTop="12">
                <Button prefixIcon="filepdf" size="l" href="/images/Allen_Jiang_s_Resume_Spring_2026.pdf" download="Allen_Jiang_Resume_2026.pdf">
                    Download PDF
                </Button>
            </Flex>
        </Column>
    </Column>
    );
}