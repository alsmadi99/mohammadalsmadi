import { useState } from "react";
import ReactPopover from "./ReactPopover";
import { experiences, games, projects } from "../constants";
import { FaCodePullRequest } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { GoRepoForked, GoStarFill, GoGlobe } from "react-icons/go";
import { SiPrivateinternetaccess } from "react-icons/si";

import { SiIos, SiAndroid } from "react-icons/si";

import useIsMobile from "../hooks/useIsMobile";
import { useContributions } from "../hooks/useContributions";
import { formatNumber, getYearsOfExperience } from "../utils";

const About = () => {
  const [isHoveringTexts, setIsHoveringTexts] = useState(false);

  const { latestContributions, isLoading: loadingContributions } =
    useContributions();
  const isMobile = useIsMobile();

  const getRepoDisplayName = (fullName: string) => {
    if (!isMobile) return fullName;
    return fullName.split("/").pop() || fullName;
  };

  const hoveringTextStyle =
    "font-semibold text-offWhite cursor-pointer bg-darkBlue rounded-sm";

  const hoverableTextStyles =
    "ease-in-out duration-500 px-[5px] border-b-[4px] border-offWhite" +
    (isHoveringTexts || isMobile ? hoveringTextStyle : "");

  const starForkContainer =
    "flex flex-row items-center justify-between px-1 py-1 md:py-0 border-primary border-2 rounded-lg w-[45%]";

  return (
    <div
      className="min-h-[85vh] flex flex-col mt-5 md:mt-10 justify-between"
      onMouseOver={() => setIsHoveringTexts(true)}
      onMouseOut={() => setIsHoveringTexts(false)}
    >
      <div>
        <div className="w-[100%] self-start justify-center flex-wrap text-wrap flex">
          <p
            className={`text-white md:text-center md:text-6xl text-xl font-black text-wrap self-center md:w-[70%]`}
          >
            Hi, my name is{" "}
            <span className="blue-text-gradient md:text-7xl text-3xl select-none">
              Mohammad
            </span>
          </p>

          {!isMobile && (
            <p
              className={`mt-5 md:mt-10 text-white-100 md:text-3xl text-lg text-center leading-7 w-[100%]`}
            >
              I specialize in building scalable web and mobile applications.
            </p>
          )}
        </div>

        <div className="flex flex-col justify-between w-full gap-4 md:mt-10 font-normal">
          <div className="flex flex-row flex-wrap w-full gap-3 md:gap-10">
            <div
              className={`mt-4 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]`}
            >
              <ReactPopover
                ariaLabel="Work experience details"
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
                          aria-label={`Visit ${exp.name} website`}
                        >
                          {exp.name}
                        </a>
                        {` as a ${exp.role}`}
                      </p>
                    ))}
                  </div>
                }
                before="I'm a software engineer based in the UAE with "
                after={`I have developed deep expertise in JavaScript and TypeScript through extensive work with React.js, Node.js, and React Native. My portfolio includes building applications using various frameworks and technologies, along with database engines like MongoDB and PostgreSQL.`}
              >
                <span className={hoverableTextStyles}>
                  {"~" + getYearsOfExperience()} of hands-on experience.
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                ariaLabel="Projects showcase"
                content={
                  <div className="flex flex-col w-full md:w-[40vw] ">
                    <span className="text-secondary font-semibold text-sm md:text-md mb-4">
                      {"Here are some of the projects I've worked on."}
                    </span>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-4">
                          <div className="flex flex-col items-center">
                            <SiAndroid className="md:h-5 md:w-5 h-4 w-4 text-secondary" />
                            <SiIos className="md:h-5 md:w-5 h-4 w-4 text-secondary" />
                          </div>
                          <span className="text-secondary text-xs md:text-sm">
                            Developed mobile apps.
                          </span>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                          <SiPrivateinternetaccess className="md:h-5 md:w-5 h-4 w-4 text-secondary" />
                          <span className="text-secondary text-xs md:text-sm">
                            Developed internal apps.
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-4">
                        <GoGlobe className="md:h-6 md:w-6 h-5 w-5 text-secondary" />
                        <span className="text-secondary text-xs md:text-sm">
                          Visit the main landing page.
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row flex-wrap gap-4 w-full justify-center md:text-xl text-md max-h-[30vh] px-4 py-4 overflow-y-auto overflow-x-hidden">
                      {projects.map((project, index) => (
                        <div key={index} className="h-[160px] w-[130px]">
                          <img
                            alt={`${project.title} project screenshot`}
                            src={project.imagen}
                            className="h-[80%] w-full object-contain rounded-lg bg-white border-secondary border-4"
                          />

                          <div className="flex flex-row items-center justify-around gap-2 h-[20%] w-full">
                            {project.link && (
                              <GoGlobe
                                onClick={() =>
                                  window.open(project.link, "_blank")
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    window.open(project.link, "_blank");
                                  }
                                }}
                                tabIndex={0}
                                role="link"
                                aria-label={`Visit ${project.title} website`}
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary hover:text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                              />
                            )}
                            {project.android && (
                              <SiAndroid
                                onClick={() =>
                                  window.open(project.android, "_blank")
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    window.open(project.android, "_blank");
                                  }
                                }}
                                tabIndex={0}
                                role="link"
                                aria-label={`Get ${project.title} on Android`}
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary hover:text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                              />
                            )}

                            {project.ios && (
                              <SiIos
                                onClick={() =>
                                  window.open(project.ios, "_blank")
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    window.open(project.ios, "_blank");
                                  }
                                }}
                                tabIndex={0}
                                role="link"
                                aria-label={`Get ${project.title} on iOS`}
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary hover:text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                              />
                            )}

                            {project.internal && (
                              <SiPrivateinternetaccess
                                aria-label={`${project.title} is an internal application`}
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary"
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                before={`I thrive in collaborative environments and have had the privilege of working alongside talented teams. Together, we've enriched our collective knowledge over the years by building various`}
                after={` while delivering high-quality software solutions and meeting tight deadlines.`}
              >
                <span className={hoverableTextStyles}>client projects ,</span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                ariaLabel="Open source contributions"
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
                                <span className="font-semibold text-xs md:text-xl">{`${getRepoDisplayName(latestContributions[repoKey].name)}: `}</span>
                                <a
                                  href={latestContributions[repoKey].link}
                                  className="text-link underline"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  aria-label={`Visit ${getRepoDisplayName(latestContributions[repoKey].name)} repository`}
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
                                  className="flex flex-row items-center cursor-pointer leading-7 hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                                  onClick={() =>
                                    window.open(item.link, "_blank")
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      window.open(item.link, "_blank");
                                    }
                                  }}
                                  tabIndex={0}
                                  role="link"
                                  aria-label={`View pull request: ${item.name}`}
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
                after={` not only benefits the community but also facilitates my growth as a developer. It has provided me with insights into how global communities collaborate on software development. Additionally, it has enhanced my understanding of CI/CD workflows and the automation of deployments in large-scale projects with 800+ contributors.`}
              >
                <span className={hoverableTextStyles}>
                  open-source projects
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                ariaLabel="Personal interests and hobbies"
                content={
                  <div className="md:text-xl text-md">
                    {games.map((game) => (
                      <p className="text-white" key={game}>
                        {"• " + game}
                      </p>
                    ))}
                    <small className="text-primary font-semibold">
                      {"and more"}
                    </small>
                  </div>
                }
                before="Outside of coding, I enjoy playing"
                after="and spending time with friends and family. I'm also passionate about football. Continuous learning is important to me, and I'm always eager to get involved in unique ideas and projects."
              >
                <span className={hoverableTextStyles}>video games</span>
              </ReactPopover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
