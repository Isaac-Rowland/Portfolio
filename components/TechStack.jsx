import {
  DiJavascript1,
  DiReact,
  DiPostgresql,
  DiRuby,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiGithubBadge,
  DiNpm,
} from "react-icons/di";
import AxiosIcon from "./AxiosIcon";
import ExpressIcon from "./ExpressIcon";
import SinatraIcon from "./SinatraIcon";

export default function TechStack() {
  return (
    <div id="tech-stack">
      <h2>Tech Stack</h2>
      <div className="icons">
        <DiReact size="4rem" aria-label="React icon" />
        <DiJavascript1 size="4rem" aria-label="JavaScript icon" />
        <DiPostgresql size="4rem" aria-label="Postgres icon" />
        <DiRuby size="4rem" aria-label="Ruby icon" />
        <DiNodejs size="4rem" aria-label="NodeJS icon" />
        <DiHtml5 size="4rem" aria-label="HTML 5 icon" />
        <DiCss3 size="4rem" aria-label="CSS 3 icon" />
        <DiGithubBadge size="4rem" aria-label="Github icon" />
        <DiNpm size="4rem" aria-label="npm icon" />
        <ExpressIcon />
        <SinatraIcon />
        <AxiosIcon />
      </div>
      <style jsx>
        {`
          #tech-stack {
            max-width: 800px;
            display: flex;
            padding: 2rem;
            margin: 4rem auto;
            flex-direction: column;
          }
          .icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 10px
          }
        `}
      </style>
    </div>
  );
}
