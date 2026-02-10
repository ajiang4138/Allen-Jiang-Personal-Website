import { ProjectCard } from "@/components";
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import ProjectsCarouselWrapper from "./ProjectsCarousel";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  compact?: boolean;
  /** If provided, will show only these projects (slug or title match) as a carousel */
  carouselItems?: string[];
  /** Carousel interval in ms */
  carouselInterval?: number;
}

export function Projects({
  range,
  exclude,
  compact = false,
  carouselItems,
  carouselInterval = 8000,
}: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude drafts/empty entries to avoid blank cards in the list.
  const nonEmptyProjects = allProjects.filter((post) => post.metadata.title?.trim());

  // Exclude by slug (exact match)
  const filtered =
    exclude && exclude.length > 0
      ? nonEmptyProjects.filter((post) => !exclude.includes(post.slug))
      : nonEmptyProjects;

  const sortedProjects = filtered.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  let displayedProjects = range ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length) : sortedProjects;

  // If carouselItems provided, pick those projects by slug or title (case-insensitive contains)
  if (carouselItems && carouselItems.length > 0) {
    const picks = carouselItems
      .map((item) => {
        const lower = item.toLowerCase();
        return displayedProjects.find((p) => p.slug.toLowerCase() === lower || p.metadata.title.toLowerCase().includes(lower));
      })
      .filter(Boolean) as typeof displayedProjects;

    if (picks.length > 0) {
      displayedProjects = picks;
    }
  }

  const useCarousel = Boolean(carouselItems && carouselItems.length > 0 && displayedProjects.length > 0);

  return (
    <Column fillWidth gap="l" marginBottom={compact ? "0" : "40"} paddingX="l">
      {useCarousel ? (
        <ProjectsCarouselWrapper projects={displayedProjects} interval={carouselInterval} />
      ) : (
        displayedProjects.map((post, i) => (
          <ProjectCard
            priority={i < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        ))
      )}
    </Column>
  );
}

// Note: `ProjectsCarousel` is a client component; importing it directly lets Next mark it as a client boundary.
