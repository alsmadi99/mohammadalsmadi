import { useState } from "react";
import ReactPopover from "./ReactPopover";
import { availability, experiences, games, projects } from "../constants";
import { FaCodePullRequest } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { GoRepoForked, GoStarFill, GoGlobe } from "react-icons/go";
import { SiPrivateinternetaccess } from "react-icons/si";
import { FaHandPointer } from "react-icons/fa";
import { SiIos, SiAndroid } from "react-icons/si";
import useIsMobile from "../hooks/useIsMobile";
import { useContributions } from "../hooks/useContributions";
import { formatNumber, getYearsOfExperience } from "../utils";

const PopoverIcon = ({ isMobile }: { isMobile: boolean }) => (
  <FaHandPointer
    className="inline-block ml-1 text-white animate-pulse-slow"
    size={isMobile ? 14 : 18}
  />
);

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
    "ease-in-out duration-500 px-[5px] border-b-[4px] border-offWhite relative" +
    (isHoveringTexts || isMobile ? hoveringTextStyle : "") +
    (isMobile
      ? " active:scale-95 active:opacity-80 touch-manipulation underline decoration-2 decoration-primary underline-offset-2"
      : "");

  const starForkContainer =
    "flex flex-row items-center justify-between px-1 py-1 md:py-0 border-primary border-2 rounded-lg w-[45%]";
  const projectSections = [
    { key: "enterprise", title: "Enterprise/Internal" },
    { key: "mobile", title: "Mobile Apps" },
    { key: "public", title: "Public Products" },
  ] as const;

  return (
    <div
      className="min-h-[85vh] flex flex-col mt-5 md:mt-10 justify-between"
      onMouseOver={() => setIsHoveringTexts(true)}
      onMouseOut={() => setIsHoveringTexts(false)}
    >
      <div className="w-full">
        <div className="w-[100%] self-start justify-center flex-wrap text-wrap flex">
          <p
            className={`text-white md:text-center md:text-6xl text-xl font-black text-wrap self-center md:w-[70%]`}
          >
            Hi, my name is{" "}
            <span className="blue-text-gradient md:text-7xl text-3xl select-none">
              Mohammad
            </span>
          </p>

          <p
            className={`mt-5 md:mt-10 text-white-100 md:text-3xl text-lg text-center leading-7 w-[100%]`}
          >
            Senior Full-Stack and Mobile Engineer helping teams ship reliable
            products faster.
          </p>
          <p className="mt-3 text-offWhite text-xs md:text-lg text-center w-full">
            I design, build, and scale web and mobile products for enterprises
            and high-growth teams.
          </p>
        </div>
        <div className="w-full mt-4 md:mt-8 border border-white/30 rounded-md px-3 py-3">
          <p className="text-secondary text-xs md:text-sm font-semibold mb-2">
            Available for
          </p>
          <div className="flex flex-wrap gap-2">
            {availability.map((item) => (
              <span
                key={item}
                className="text-offWhite text-[11px] md:text-sm border border-secondary/40 rounded-md px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          id="projects"
          className="flex flex-col justify-between w-full gap-4 md:mt-10 font-normal"
        >
          <div className="flex flex-row flex-wrap w-full gap-3 md:gap-10">
            <div
              className={`mt-4 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]`}
            >
              <ReactPopover
                popoverId="experience"
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
                  <PopoverIcon isMobile={isMobile} />
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                popoverId="projects"
                ariaLabel="Projects showcase"
                content={
                  <div className="flex flex-col w-full md:min(40vw, 400px)">
                    <span className="text-primary font-semibold text-sm md:text-md mb-3">
                      Selected work by category, including role, stack, and
                      outcomes.
                    </span>
                    <div className="flex flex-col gap-4 w-full max-h-[36vh] px-2 py-2 overflow-y-auto overflow-x-hidden">
                      {projectSections.map((section) => {
                        const sectionProjects = projects.filter(
                          (project) => project.category === section.key,
                        );
                        if (!sectionProjects.length) return null;
                        return (
                          <div key={section.key}>
                            <p className="text-secondary text-lg md:text-md font-semibold mb-2">
                              {section.title}
                            </p>
                            <hr className="border-secondary/30 my-2 border-1 rounded-md" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:text-xl text-md">
                              {sectionProjects.map((project, index) => (
                                <div
                                  key={`${section.key}-${index}`}
                                  className="w-full rounded-lg border border-primary/30 bg-darkBlue/30 p-2 flex flex-col gap-2"
                                >
                                  <img
                                    alt={`${project.title} project screenshot`}
                                    src={project.imagen}
                                    className="h-[96px] w-full object-contain rounded-lg bg-white border-secondary border-2"
                                  />
                                  <div className="min-h-[110px]">
                                    <p className="text-offWhite text-xs md:text-sm font-semibold leading-4 break-words">
                                      {project.title}
                                    </p>
                                    <p className="text-secondary text-[10px] md:text-xs leading-4 mt-1 break-words">
                                      {project.role}
                                    </p>
                                    <p className="text-offWhite text-[10px] md:text-xs leading-4 mt-1 break-words">
                                      {project.stack}
                                    </p>
                                    <p className="text-primary text-[10px] md:text-xs leading-4 mt-1 break-words">
                                      {project.impact}
                                    </p>
                                    {project.confidentiality && (
                                      <p className="text-secondary text-[10px] mt-1 leading-4 break-words">
                                        {project.confidentiality}
                                      </p>
                                    )}
                                  </div>
                                  <div className="mt-auto flex flex-row items-center justify-center gap-3 w-full pt-1 border-t border-primary/20">
                                    {project.link && (
                                      <GoGlobe
                                        onClick={() =>
                                          window.open(project.link, "_blank")
                                        }
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
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
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault();
                                            window.open(
                                              project.android,
                                              "_blank",
                                            );
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
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
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
                        );
                      })}
                    </div>
                  </div>
                }
                before={`I work across enterprise and startup environments, and I focus on`}
                after={` with clear ownership, strong engineering standards, and measurable outcomes.`}
              >
                <span className={hoverableTextStyles}>
                  product-focused projects
                  <PopoverIcon isMobile={isMobile} />
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                popoverId="contributions"
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
                                <a
                                  href={latestContributions[repoKey].link}
                                  className="text-link underline font-semibold text-xs md:text-xl"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  aria-label={`Visit ${getRepoDisplayName(latestContributions[repoKey].name)} repository`}
                                >{`${getRepoDisplayName(latestContributions[repoKey].name)}:`}</a>
                                {!isMobile && (
                                  <FiExternalLink
                                    className="text-md md:text-xl"
                                    aria-hidden="true"
                                  />
                                )}
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
                  <PopoverIcon isMobile={isMobile} />
                </span>
              </ReactPopover>
            </div>

            <div className="flex flex-row flex-wrap gap-1 text-offWhite text-[14px] md:text-2xl leading-6 md:leading-[3rem]">
              <ReactPopover
                popoverId="games"
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
                <span className={hoverableTextStyles}>
                  video games
                  <PopoverIcon isMobile={isMobile} />
                </span>
              </ReactPopover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
