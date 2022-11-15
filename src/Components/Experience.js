import { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import ExperienceTitle from "./ExperienceTitle";

const experience = [
  {
    position: "Full Stack Software Engineer",
    workplace: "Flexibly",
    date: "FEB 2022 - PRESENT",
    description: [
      "Developed and maintained core application features through modular, secure, and well-tested code using React, TypeScript, Node, and Next.js.",
      "Improve test speed by 80% through implementation of Cypress mocks for end-to-end tests.",
      "Lead developer in an agile software development team to complete various epics through sprints, working in conjunction with other developers and engineers.",
      "Implement smart features for application through integration of natural language processing API’s to improve the user experience.",
    ],
  },
  {
    position: "Coding Instructor",
    workplace: "Wiz Kid Learning",
    date: "JAN 2021 - APR 2021",
    description: [
      "Taught coding fundamentals, problem solving and computational thinking skills through video game development while using Python and Roblox Studio.",
      "Delivered innovative programs to private and group classes on how to design, code and publish video games.",
      "Helped kids ages 3 to 16 acquire coding skills as an avenue to enhance their ability to think critically and improve their current academic performance.",
    ],
  },
];

export default function Experience(props) {
  const [experienceIndex, setExperienceIndex] = useState(0);

  const mappedExperienceTitles = experience.map((exp, index) => {
    return (
      <ExperienceTitle
        workplace={exp.workplace}
        key={index + 1}
        index={index}
        experience={exp}
        experienceIndex={experienceIndex}
        setExperienceIndex={setExperienceIndex}
      />
    );
  });

  return (
    <div className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-content">
        <div className="experience-list">
          {mappedExperienceTitles}
          <span
            className="highlight"
            style={{ transform: `translateY(${48 * experienceIndex}px)` }}
          ></span>
          <span
            className="underHighlight"
            style={{ transform: `translateX(${100 * experienceIndex}%)` }}
          ></span>
        </div>
        <ExperienceItem
          position={experience[experienceIndex].position}
          workplace={experience[experienceIndex].workplace}
          date={experience[experienceIndex].date}
          description={experience[experienceIndex].description}
        />
      </div>
    </div>
  );
}
