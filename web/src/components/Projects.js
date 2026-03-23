import React, { useState } from "react";
import FadeIn from "react-fade-in";
import projects from "./projects.json";

const FILTER_OPTIONS = ["All", "Research", "Trading"];

function groupByCategory(projects) {
  const groups = {};
  projects.forEach((p, idx) => {
    const cat = p.category || "Research";
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push({ ...p, _idx: idx });
  });
  return groups;
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const grouped = groupByCategory(projects);

  const categoriesToShow = filter === "All" ? ["Research", "Trading"] : [filter];

  return (
    <div className="mainDiv">
      <div className="mainMarginDiv">
        <div className="projectsSection">
          <FadeIn transitionDuration={1100}>
            <p>
              From DeFi to market microstructure and beyond.
            </p>
            <p style={{ marginTop: 16 }}>
              The project lab model is inspired by UChicago's Master in Financial Mathematics program, where industry partners sponsor student teams to tackle real research and consulting work. Companies can sponsor a project, outsource work, or engage us for consulting.
            </p>
            <p style={{ marginTop: 12, marginBottom: 24 }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUITiokjeHIBQshqaJCShX0qBmx1KevwfyCndypjqRKMWgNw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink hover"
              >
                Companies & partners: Get involved →
              </a>
            </p>
          </FadeIn>

          <div className="projectFilters">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`projectFilterPill ${filter === opt ? "active" : ""}`}
                  onClick={() => setFilter(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              {categoriesToShow.map((category) => {
                const items = grouped[category];
                if (!items || items.length === 0) return null;
                return (
                  <div key={category} className="projectCategorySection">
                    {filter === "All" && (
                      <h2 className="projectCategoryHeading">{category}</h2>
                    )}
                    <div className="projectsGrid">
                      {items.map((project) => (
                        <div key={project._idx} className="projectCard">
                          <p className="projectTitle">{project.name}</p>
                          <p className="projectDescription">{project.description}</p>
                          {project.tags && project.tags.length > 0 && (
                            <div className="projectTags">
                              {project.tags.map((tag, i) => (
                                <span key={i} className="projectTag">{tag}</span>
                              ))}
                            </div>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="projectLink hover"
                            >
                              {project.linkLabel || "View Project"}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default Projects;
