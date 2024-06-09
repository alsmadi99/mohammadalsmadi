/*
  ! This component is the About me section of the portfolio.
*/
import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import ReactPopover from "./ReactPopover";
import { contributions, experience, games } from "../constants";
import { useParallax } from "react-scroll-parallax";
import { FaCodePullRequest } from "react-icons/fa6";

const About = () => {
  const [isHoveringTexts, setIsHoveringTexts] = useState(false);
  const [latestContribution, setLatestContribution] = useState({});

  const getYearsOfExperience = (date = "2020-08-01", endDate = "") => {
    const startDate = new Date(date);
    const currentDate = endDate ? new Date(endDate) : new Date();
    const experienceInMilliseconds = currentDate - startDate;
    const experienceInYears =
      experienceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const experienceInWholeYears = Math.ceil(experienceInYears);

    return `${experienceInWholeYears} year${
      experienceInWholeYears > 1 ? "s" : ""
    }`;
  };

  const getLatestContribution = async () => {
    const fetchContributions = (contribution) =>
      fetch(
        `https://api.github.com/search/issues?q=is:pr+author:smadixd+repo:${contribution.repo}`,
        {
          headers: {
            "User-Agent": "smadixd",
            accept: "application/json",
          },
        }
      ).then((response) => response.json());

    const contributionsData = await Promise.all(
      contributions.map(fetchContributions)
    );

    const contributionsHashMap = contributionsData.reduce(
      (acc, contribution) => {
        contribution.items.forEach((item) => {
          const repo = item.repository_url.split("repos/").pop().toLowerCase();

          if (!acc[repo]) {
            acc[repo] = [];
          }

          if (acc[repo].length < 4) {
            acc[repo].push({
              name: item.title,
              link: item.pull_request.html_url,
            });
          }
        });

        return acc;
      },
      {}
    );

    setLatestContribution(contributionsHashMap);
  };

  useEffect(() => {
    getLatestContribution();
  }, []);

  const hoveringTextStyle =
    "text-primary cursor-pointer bg-secondary rounded-sm px-[5px] border-b-[4px] border-white";

  const hoverableTextStyles =
    "ease-in-out duration-500 " +
    (isHoveringTexts ? hoveringTextStyle : "border-b-2 border-white");

  const parallax = useParallax({
    scale: [1, 1.5, "easeInQuad"],
  });

  return (
    <div
      className="h-full flex flex-col pt-20"
      onMouseOver={() => setIsHoveringTexts(true)}
      onMouseOut={() => setIsHoveringTexts(false)}
    >
      <div>
        <p
          ref={parallax.ref}
          className={`text-white text-center md:text-6xl text-xl font-black`}
        >
          Hi, my name is <span className="text-secondary"> Mohammad</span>
        </p>

        <p
          className={`mt-10 text-white-100 md:text-2xl text-lg text-center leading-7`}
        >
          I love building unique web & mobile applications.
        </p>
      </div>

      <div className="flex flex-col justify-between w-full gap-4 h-[60vh] mt-5 font-semibold md:font-normal">
        <div className="flex flex-row flex-wrap w-full gap-3">
          <div className="mt-4 text-secondary text-[11px] md:text-lg leading-6 md:leading-relaxed">
            <ReactPopover
              trigger="hover"
              content={
                <div className="flex flex-col w-full">
                  {experience.map((exp, index) => (
                    <p className="text-white" key={index}>
                      ~ {getYearsOfExperience(exp.start, exp.end)}
                      {" @ "}
                      <a
                        href={exp.link}
                        target="_blank"
                        className="text-secondary underline"
                      >
                        {exp.name}
                      </a>
                      {` as a ${exp.role}`}
                    </p>
                  ))}
                </div>
              }
              before="I'm a software engineer based in Jordan with around"
              after={`I've mastered JavaScript and TypeScript, working extensively with
              React.js, Node.js, and React Native. My portfolio includes building
              applications using various frameworks and technologies on top of
              using database engines like MongoDB and PostgreSQL.`}
            >
              <span className={hoverableTextStyles}>
                {getYearsOfExperience()} of hands-on experience.
              </span>
            </ReactPopover>
          </div>
          <div className="flex flex-row flex-wrap gap-1 text-secondary text-[11px] md:text-lg leading-6 md:leading-relaxed">
            <ReactPopover
              trigger="hover"
              content={
                <div className="flex flex-col w-full">
                  <small className="text-white font-bold mb-2">
                    Here are my most recent contributions.
                  </small>
                  {contributions.map((contribution, index) => (
                    <div key={index} className={index > 0 ? " mt-2" : ""}>
                      <div className="flex flex-row items-center gap-1">
                        {`${contribution.name}: `}
                        <a
                          href={contribution.link}
                          className="text-secondary underline"
                          target="_blank"
                        >
                          {contribution.link}
                        </a>
                      </div>
                      {latestContribution?.[contribution.repo]?.map((item) => (
                        <div
                          key={`${index}-${item.name}`}
                          className="flex flex-row items-center pl-4 pt-1 gap-2 cursor-pointer leading-7 hover:text-secondary"
                          onClick={() => window.open(item.link, "_blank")}
                        >
                          <FaCodePullRequest className="text-secondary text-sm" />
                          <small>{item?.name}</small>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              }
              before={`Team collaboration is something I truly enjoy, and I've had the
              privilege of working alongside incredibly talented individuals who
              have enriched my knowledge over the years. As solo working on
              projects isn't something that motivates me. I believe that contributing to `}
              after={`not only helps the community, but also helps me grow as a developer and learn how communities around the world are building software.`}
            >
              <span className={hoverableTextStyles}>open-source projects</span>
            </ReactPopover>
          </div>

          <div className="flex flex-row flex-wrap gap-1 text-secondary text-[11px] md:text-lg leading-6 md:leading-relaxed">
            <ReactPopover
              trigger="hover"
              content={
                <div>
                  {games.map((game) => (
                    <p className="text-white" key={game}>
                      {"• " + game}
                    </p>
                  ))}
                  <small>{"and more :)"}</small>
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
        <p className="text-white text-[10px] md:text-sm">
          Feel free to explore my portfolio to see some of the exciting projects
          I've worked on. If you have any questions or just want to chat, don't
          hesitate to reach out!
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
