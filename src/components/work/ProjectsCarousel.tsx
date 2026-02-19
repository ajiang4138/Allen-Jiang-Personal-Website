"use client";

import { ProjectCard } from "@/components";
import { useCallback, useEffect, useRef, useState } from "react";

interface ProjectData {
  slug: string;
  metadata: {
    images: string[];
    title: string;
    summary: string;
    team?: { avatar: string }[];
    link?: string;
  };
  content: string;
}

interface Props {
  projects: ProjectData[];
  interval?: number;
}

const TRANSITION_MS = 800;

export default function ProjectsCarousel({ projects, interval = 8000 }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const fadeInRef = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const clearTransitionTimers = useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (fadeInRef.current) window.clearTimeout(fadeInRef.current);
  }, []);

  const transitionTo = useCallback(
    (delta: number) => {
      if (!projects || projects.length < 2) return;

      clearTransitionTimers();
      setVisible(false);

      timeoutRef.current = window.setTimeout(() => {
        setIndex((i) => (i + delta + projects.length) % projects.length);
        fadeInRef.current = window.setTimeout(() => setVisible(true), 30);
      }, TRANSITION_MS);
    },
    [projects, clearTransitionTimers],
  );

  const restartAutoRotate = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    if (!projects || projects.length < 2) return;
    intervalRef.current = window.setInterval(() => transitionTo(1), interval);
  }, [projects, interval, transitionTo]);

  useEffect(() => {
    restartAutoRotate();

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      clearTransitionTimers();
    };
  }, [restartAutoRotate, clearTransitionTimers]);

  useEffect(() => {
    setIndex((currentIndex) => {
      if (!projects.length) return 0;
      return currentIndex % projects.length;
    });
    setVisible(true);
  }, [projects.length]);

  const current = projects[index];
  const canNavigate = projects.length > 1;

  function handleDotClick(targetIndex: number) {
    if (targetIndex === index || !projects.length) return;

    clearTransitionTimers();
    setVisible(false);

    timeoutRef.current = window.setTimeout(() => {
      setIndex(targetIndex);
      fadeInRef.current = window.setTimeout(() => setVisible(true), 30);
    }, TRANSITION_MS);

    restartAutoRotate();
  }

  if (!current) return null;

  // Update container height to current content to avoid layout jumps
  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const h = el.offsetHeight;
    setContainerHeight(h);
    // animate height changes slightly
  });

  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden", height: containerHeight ? `${containerHeight}px` : "auto", transition: `height ${TRANSITION_MS}ms ease` }}>
        <div
          key={current.slug}
          ref={contentRef}
          style={{
            transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.2,0.8,0.2,1), transform ${TRANSITION_MS}ms cubic-bezier(0.2,0.8,0.2,1)`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
            willChange: "opacity, transform",
            position: "relative",
          }}
        >
          <ProjectCard
            priority={index < 2}
            href={`/work/${current.slug}`}
            images={current.metadata.images}
            title={current.metadata.title}
            description={current.metadata.summary}
            content={current.content}
            avatars={current.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={current.metadata.link || ""}
          />
        </div>
      </div>
      {canNavigate && (
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "1rem" }}>
          {projects.map((project, dotIndex) => {
            const isActive = dotIndex === index;

            return (
              <button
                key={project.slug}
                type="button"
                aria-label={`View featured work ${dotIndex + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => handleDotClick(dotIndex)}
                style={{
                  width: "0.625rem",
                  height: "0.625rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: isActive
                    ? "var(--brand-solid-strong)"
                    : "var(--neutral-alpha-medium)",
                  opacity: isActive ? 1 : 0.7,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
