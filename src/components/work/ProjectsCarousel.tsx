"use client";

import { ProjectCard } from "@/components";
import { useEffect, useRef, useState } from "react";

interface ProjectData {
  slug: string;
  metadata: any;
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

  useEffect(() => {
    if (!projects || projects.length < 2) return;

    function next() {
      // start fade-out
      setVisible(false);
      // after fade-out, switch slide and trigger fade-in on next tick
      timeoutRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % projects.length);
        // ensure new slide mounts with visible=false, then trigger fade-in shortly after
        if (fadeInRef.current) window.clearTimeout(fadeInRef.current);
        fadeInRef.current = window.setTimeout(() => setVisible(true), 30);
      }, TRANSITION_MS);
    }

    intervalRef.current = window.setInterval(next, interval);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (fadeInRef.current) window.clearTimeout(fadeInRef.current);
    };
  }, [projects, interval]);

  useEffect(() => {
    setIndex(0);
    setVisible(true);
  }, [projects.map((p) => p.slug).join(",")]);

  const current = projects[index];

  if (!current) return null;

  // Update container height to current content to avoid layout jumps
  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const h = el.offsetHeight;
    setContainerHeight(h);
    // animate height changes slightly
  }, [index, visible]);

  return (
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
          avatars={current.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
          link={current.metadata.link || ""}
        />
      </div>
    </div>
  );
}
