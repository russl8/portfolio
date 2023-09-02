import React, { useEffect, useState, useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string;
}

export default function FadeInSection(props: FadeInSectionProps) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay || "0s"}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
