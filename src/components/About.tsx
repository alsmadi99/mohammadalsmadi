/*
  ! This component is the About me section of the portfolio.
*/

import { useMemo, useState } from "react";
import ReactPopover from "./ReactPopover";
import { experiences, games, projects } from "../constants";
import { FaCodePullRequest } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { GoRepoForked, GoStarFill } from "react-icons/go";

import useIsMobile from "../hooks/useIsMobile";
import { useContributions } from "../hooks/useContributions";
import { formatNumber, getYearsOfExperience } from "../utils";
import { hoverableTextStyles, starForkContainer } from "../styles";

const About = () => {
  const [isHoveringTexts, setIsHoveringTexts] = useState(false);

  const { latestContributions, isLoading: loadingContributions } =
    useContributions();
  const isMobile = useIsMobile();

  const hoverableTextStylesString = useMemo(() => {
    return hoverableTextStyles({
      isHoveringTexts,
      isMobile,
    });
  }, [isHoveringTexts, isMobile]);

  return (
    <div
      className="min-h-[85vh] flex flex-col mt-10 justify-between"
      onMouseOver={() => setIsHoveringTexts(true)}
      onMouseOut={() => setIsHoveringTexts(false)}
    >
      <div>
        <div className="w-[100%] self-start justify-center flex-wrap text-wrap flex">
          <p
            className={`text-white text-center md:text-6xl text-xl font-black text-wrap self-center w-[70%]`}
          >
            Hi, my name is{" "}
            <span className="blue-text-gradient md:text-7xl text-4xl select-none">
              Mohammad
            </span>
          </p>

          <p
            className={`mt-10 text-white-100 md:text-3xl text-lg text-center leading-7 w-[100%]`}
          >
            I love building unique web & mobile applications.
          </p>
        </div>

        <div className="flex flex-col justify-between w-full gap-4 mt-10 font-normal text-center md:text-left">
          <div className="flex flex-row flex-wrap w-full gap-3 md:gap-10">
            <div
              className={`mt-4 text-offWhite text-[12px] md:text-2xl leading-6 md:leading-[3rem]`}
            >
              <ReactPopover
                content={
                  <div className="flex flex-col w-full md:text-xl text-md">
                    {experiences.map((exp, index) => (
                      <p className="text-white" key={index}>
                        ~ {getYearsOfExperience(exp.start, exp.end)}
                        {" @ "}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline font-semibold"
                        >
                          {exp.name}
                        </a>
                        {` as a ${exp.role}`}
                      </p>
                    ))}
                  </div>
                }
                before="I'm a software engineer based in Jordan with "
                after={`I have developed deep understanding of JavaScript and TypeScript through extensive work with React.js,
               Node.js, and React Native. My portfolio includes building
              applications using various frameworks and technologies on top of
              using database engines like MongoDB and PostgreSQL.`}
              >
                <span className={hoverableTextStylesString}>
                  {"~" + getYearsOfExperience()} of hands-on experience.
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[12px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                content={
                  <div className="flex flex-col w-full">
                    <span className="text-secondary font-semibold text-sm md:text-md mb-4">
                      {"Here are some of the projects I've worked on."}
                    </span>

                    <div className="flex flex-col w-full md:text-xl text-md max-h-[30vh] px-4 py-4 overflow-y-auto overflow-x-hidden">
                      {projects.map((project, index) => (
                        <div
                          key={index}
                          className={`flex flex-row items-center cursor-pointer leading-7 hover:text-primary hover:underline ${index > 0 ? "mt-2" : ""}`}
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <img
                            alt={project.title}
                            src={project.imagen}
                            className="h-10 w-10 rounded-full mr-2"
                          />
                          <div className="flex flex-col">
                            {/* title */}
                            <span className="text-xs md:text-lg py-1">
                              {project.title}
                            </span>
                            {/* description */}
                            <span className="text-xs md:text-xs py-1">
                              {project.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                before={`Team collaboration is something I truly enjoy. I've had the privilege of working alongside incredibly talented individuals. Together, we've enriched our collective knowledge over the years by building various`}
                after={`, while delivering high-quality software solutions and meeting tight deadlines.`}
              >
                <span className={hoverableTextStylesString}>
                  client-based projects
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[12px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                content={
                  <div className="flex flex-col w-full">
                    <span className="text-secondary font-semibold text-sm md:text-md mb-4">
                      Here are my most recent contributions.
                    </span>
                    <div className="max-h-[30vh] px-4 py-4 overflow-y-auto overflow-x-hidden">
                      {Object.keys(latestContributions).map(
                        (repoKey, index) => (
                          <div key={index} className={index > 0 ? " mt-2" : ""}>
                            <div className="flex flex-row items-center justify-between mb-2">
                              <div className="flex flex-row items-center gap-2">
                                <span className="font-semibold text-md md:text-xl">{`${latestContributions[repoKey].name}: `}</span>
                                <a
                                  href={latestContributions[repoKey].link}
                                  className="text-link underline"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <FiExternalLink className="text-md md:text-xl" />
                                </a>
                              </div>
                              <div className="flex flex-row items-center justify-between md:w-[30%] w-[50%]">
                                <div className={starForkContainer}>
                                  <span className="text-xs md:text-lg tracking-widest">
                                    {formatNumber(
                                      latestContributions[repoKey].details
                                        .forks,
                                    )}
                                  </span>
                                  <GoRepoForked className="text-md md:text-xl w-4 h-4 md:w-5 md:h-5 text-offWhite" />
                                </div>

                                <div className={starForkContainer}>
                                  <span className="text-xs md:text-lg tracking-widest">
                                    {formatNumber(
                                      latestContributions[repoKey].details
                                        .stars,
                                    )}
                                  </span>
                                  <GoStarFill className="text-md md:text-xl w-4 h-4 md:w-5 md:h-5 text-github-yellow" />
                                </div>
                              </div>
                            </div>
                            {latestContributions[repoKey].items?.map(
                              (item, index) => (
                                <div
                                  key={`${repoKey}-${index}`}
                                  className="flex flex-row items-center cursor-pointer leading-7 hover:text-primary hover:underline"
                                  onClick={() =>
                                    window.open(item.link, "_blank")
                                  }
                                >
                                  <FaCodePullRequest
                                    className={`${
                                      item.isMerged
                                        ? "text-github-purple"
                                        : "text-github-green"
                                    } text-md md:text-xl w-[10%]`}
                                  />
                                  <span className="text-xs md:text-lg py-1 w-[90%]">
                                    {item?.name}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                }
                isLoading={loadingContributions}
                before={`I believe that contributing to `}
                after={` not only benefits the community but also facilitates my growth as a developer. It has enlightened me on how communities around the world collaborate on software development. Additionally, it has enhanced my understanding of CI/CD workflows and the automation of deployments in large-scale projects with more than 800 contributors.`}
              >
                <span className={hoverableTextStylesString}>
                  open-source projects
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[12px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                content={
                  <div className="md:text-xl text-md">
                    {games.map((game) => (
                      <p className="text-white" key={game}>
                        {"• " + game}
                      </p>
                    ))}
                    <small className="text-primary font-semibold">
                      {"and more :)"}
                    </small>
                  </div>
                }
                before="Outside of coding, I enjoy playing"
                after="and hanging out with friends and family. I also enjoy playing football. Learning new development skills is a hobby of mine,
              and I'm always keen on getting involved in various unique ideas and projects."
              >
                <span className={hoverableTextStylesString}>video games</span>
              </ReactPopover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
