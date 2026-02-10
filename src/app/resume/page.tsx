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
                    <Text variant="body-default-m" onBackground="neutral-weak">
                        Relevant Coursework: Machine Learning & AI, Robotics and Perception, Systems & Networking, Computer Networking, Databases, Android Development, Algorithms, Data Structures, Automata and Complexity
                    </Text>
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

            {/* Planetway */}
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
                    <Text variant="body-default-m">Currently refactoring Supabase SQL queries to reduce database latency, directly accelerating rendering speed for end-users.</Text>
                </List>
            </Column>

            {/* Research */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Researcher @ GaTech</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Agile Communications Architecture</Text>
                    </Column>
                    <Column horizontal="end" style={{ whiteSpace: 'nowrap' }}>
                        <Text variant="body-default-m" onBackground="neutral-weak">January 2025 - Present</Text>
                        <Text variant="body-default-s" onBackground="neutral-alpha-medium">Atlanta, GA</Text>
                    </Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Developed an AI-powered image compression system using PyTorch and Stable Diffusion reducing data transmission size by 90% while maintaining 95% visual accuracy.</Text>
                    <Text variant="body-default-m">Currently building a resilient radio transmission system using machine learning to automatically correct errors in high-interference environments.</Text>
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

            {/* Flight Connection Risk Predictor */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Flight Connection Risk Predictor</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Python, XGBoost, Pandas, scikit-learn</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">November 2025</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Developed a machine learning model analyzing 15M+ flight records to predict the probability of a missed connection, minimizing passenger disruption and reducing airline re-routing costs.</Text>
                    <Text variant="body-default-m">The predictive model had an overall accuracy of 90%, and identified route congestion and scheduled timing as key delay predictors, enabling proactive scheduling and rerouting decisions. </Text>
                </List>
            </Column>

            {/* Carbon Tracker */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Carbon Tracker</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Javascript, React, Vercel, Supabase</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">June 2025</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Collaborating with Planetway to build a carbon footprint tracking platform for companies, with secure authentication, notification, and cloud backend, improving accuracy and efficiency in sustainability reporting.</Text>
                    <Text variant="body-default-m">Developed the frontend using Vercel and integrated Supabase for scalable backend infrastructure, enabling secure data processing and storage.</Text>
                </List>
            </Column>

            {/* Wrappedify App */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Wrappedify App</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Java, Kotlin</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">April 2024</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Developed an Android app leveraging the Spotify API to generate on-demand, personalized Spotify summaries, offering users an engaging music data experience.</Text>
                    <Text variant="body-default-m">Integrated Firebase for secure user data storage, account setup, and a shareable summary feature, enabling users to post their summaries on a social media-style feed, fostering community engagement.</Text>
                </List>
            </Column>

            {/* Number Recognition Software */}
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Number Recognition Software</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Python, Tensorflow, Keras</Text>
                    </Column>
                    <Column horizontal="end"><Text variant="body-default-m" onBackground="neutral-weak">July 2024</Text></Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Engineered a neural network with TensorFlow and Keras, achieving a 95% recognition accuracy for handwritten numbers, significantly advancing the model's reliability.</Text>
                </List>
            </Column>
        </Column>

        {/* Leadership Section */}
        <Column fillWidth gap="24">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Leadership</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>
            <Column gap="12" marginBottom="12">
                <Row horizontal="space-between" vertical="baseline" fillWidth gap="16">
                    <Column flex={1} gap="4">
                        <Text variant="body-strong-l">Team Leader @ Auburn Hacks</Text>
                        <Text variant="body-default-m" onBackground="brand-medium" weight="strong">Java</Text>
                    </Column>
                    <Column horizontal="end" style={{ whiteSpace: 'nowrap' }}>
                        <Text variant="body-default-m" onBackground="neutral-weak">February 2023</Text>
                    </Column>
                </Row>
                <List>
                    <Text variant="body-default-m">Led a team in building a game from scratch in Python, focusing on foundational mechanics and AI-driven NPC movement patterns.</Text>
                </List>
            </Column>
        </Column>

        {/* Technical Skills Section */}
        <Column fillWidth gap="24">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Technical Skills</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>
            <Column gap="16">
                <Row gap="8"><Text variant="body-strong-m">Languages:</Text><Text variant="body-default-m">C++, Assembly, C, Python, Java, Javascript, SQL, SQLite, NoSQL</Text></Row>
                <Row gap="8"><Text variant="body-strong-m">Technologies:</Text><Text variant="body-default-m">React, PyTorch, TensorFlow, Pandas, scikit-learn, XGBoost, NumPy, Transformers</Text></Row>
                <Row gap="8"><Text variant="body-strong-m">Tools:</Text><Text variant="body-default-m">Git, GNURadio, Vercel, Supabase, Unity, Jupyter Notebook, Android Studio</Text></Row>
            </Column>
        </Column>

        {/* PDF Section */}
        <Column fillWidth gap="24" paddingTop="24" marginBottom="64">
            <Row vertical="center" gap="16" horizontal="center">
                <Line background="neutral-alpha-medium" flex={1} />
                <Heading variant="display-strong-s">Resume PDF</Heading>
                <Line background="neutral-alpha-medium" flex={1} />
            </Row>
            <Flex 
                fillWidth 
                background="neutral-alpha-weak" 
                radius="l" 
                overflow="hidden"
                border="neutral-alpha-weak"
                style={{ height: '800px', position: 'relative' }}
            >
                <iframe
                    src="/images/Allen_Jiang_s_Resume_Spring_2026.pdf"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Allen Jiang Resume PDF"
                />
            </Flex>
            <Flex horizontal="center" marginTop="12">
                <Button 
                    prefixIcon="filepdf" 
                    size="l" 
                    href="/images/Allen_Jiang_s_Resume_Spring_2026.pdf" 
                    download="Allen_Jiang_Resume_2026.pdf"
                >
                    Download PDF
                </Button>
            </Flex>
        </Column>
    </Column>
    );
}