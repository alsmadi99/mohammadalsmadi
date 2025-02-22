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
              I love building unique web & mobile applications.
            </p>
          )}
        </div>

        <div className="flex flex-col justify-between w-full gap-4 md:mt-10 font-normal">
          <div className="flex flex-row flex-wrap w-full gap-3 md:gap-10">
            <div
              className={`mt-4 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]`}
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
                <span className={hoverableTextStyles}>
                  {"~" + getYearsOfExperience()} of hands-on experience.
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
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
                            alt={project.title}
                            src={project.imagen}
                            className="h-[80%] w-full object-contain rounded-lg bg-white border-secondary border-4"
                          />

                          <div className="flex flex-row items-center justify-around gap-2 h-[20%] w-full">
                            {project.link && (
                              <GoGlobe
                                onClick={() =>
                                  window.open(project.link, "_blank")
                                }
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary hover:text-primary cursor-pointer"
                              />
                            )}
                            {project.android && (
                              <SiAndroid
                                onClick={() =>
                                  window.open(project.android, "_blank")
                                }
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary hover:text-primary cursor-pointer"
                              />
                            )}

                            {project.ios && (
                              <SiIos
                                onClick={() =>
                                  window.open(project.ios, "_blank")
                                }
                                className="md:h-6 md:w-6 h-5 w-5 text-secondary hover:text-primary cursor-pointer"
                              />
                            )}

                            {project.internal && (
                              <SiPrivateinternetaccess className="md:h-6 md:w-6 h-5 w-5 text-secondary" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                before={`Team collaboration is something I truly enjoy. I've had the privilege of working alongside incredibly talented individuals. Together, we've enriched our collective knowledge over the years by building various`}
                after={` while delivering high-quality software solutions and meeting tight deadlines.`}
              >
                <span className={hoverableTextStyles}>client projects ,</span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
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
                after={` not only benefits the community but also facilitates my growth as a developer. It has enlightened me on how communities around the world collaborate on software development. Additionally, it has enhanced my understanding of CI/CD workflows and the automation of deployments in large-scale projects with 800+ contributors.`}
              >
                <span className={hoverableTextStyles}>
                  open-source projects
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
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
