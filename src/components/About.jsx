/*
  ! This component is the About me section of the portfolio.
*/
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import ReactPopover from "./ReactPopover";
import { contributions, games } from "../constants";
import { useParallax } from "react-scroll-parallax";

const About = () => {
  const [isHoveringTexts, setIsHoveringTexts] = useState(false);

  const getYearsOfExperience = (date = "2020-08-01", endDate = "") => {
    const startDate = new Date(date);
    const currentDate = endDate ? new Date(endDate) : new Date();
    const experienceInMilliseconds = currentDate - startDate;
    const experienceInYears =
      experienceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const experienceInWholeYears = Math.ceil(experienceInYears);

    return experienceInWholeYears;
  };

  const hoveringTextStyle =
    "text-primary cursor-pointer bg-secondary rounded-sm px-[2px]";

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
          className={`text-white text-center md:text-6xl text-2xl font-black`}
        >
          Hi, my name is <span className="text-secondary"> Mohammad</span>
        </p>

        <p
          className={`mt-10 text-white-100 md:text-2xl text-lg text-center leading-7`}
        >
          I love building unique web & mobile applications.
        </p>
      </div>

      <div className="flex flex-col justify-between w-full gap-4 h-[60vh] mt-5">
        <div className="flex flex-row flex-wrap w-full gap-3">
          <div className="mt-4 text-secondary text-[11px] md:text-lg leading-normal md:leading-relaxed">
            <ReactPopover
              trigger="hover"
              content={
                <div className="flex flex-col w-full">
                  <p className="text-white">
                    ~ {getYearsOfExperience("2020-08-01", "2021-08-01")} year @{" "}
                    <a
                      href="https://www.kensoftware.com"
                      target="_blank"
                      className="text-secondary underline"
                    >
                      Kensoftware
                    </a>{" "}
                    as a Software Engineer
                  </p>
                  <p className="text-white">
                    ~ {getYearsOfExperience("2021-08-01")} years @{" "}
                    <a
                      href="https://www.pwc.com"
                      target="_blank"
                      className="text-secondary underline"
                    >
                      PriceWaterhouseCoopers (PwC)
                    </a>{" "}
                    as a Software Engineer
                  </p>
                </div>
              }
              before="I'm a software engineer based in Jordan with around"
              after={`I've mastered JavaScript and TypeScript, working extensively with
              React, Node, and React Native. My portfolio includes building
              applications using various frameworks and technologies on top of
              using database engines like MongoDB and PostgreSQL.`}
            >
              <span
                className={
                  "ease-in-out duration-500 " +
                  (isHoveringTexts ? hoveringTextStyle : "")
                }
              >
                {getYearsOfExperience()} years of hands-on experience.
              </span>
            </ReactPopover>
          </div>
          <div className="flex flex-row flex-wrap gap-1 text-secondary text-[11px] md:text-lg leading-normal md:leading-relaxed">
            <ReactPopover
              trigger="hover"
              content={
                <div className="flex flex-col w-full">
                  {contributions.map((contribution, index) => (
                    <div key={index}>
                      {`• ${contribution.name}: `}
                      <a
                        href={contribution.link}
                        className="text-white underline"
                        target="_blank"
                      >
                        {contribution.link}
                      </a>
                    </div>
                  ))}
                </div>
              }
              before={`Team collaboration is something I truly enjoy, and I've had the
              privilege of working alongside incredibly talented individuals who
              have enriched my knowledge over the years. As solo working on
              projects isn't something that motivates me. I believe that contributing to `}
              after={`not only helps the community, but also helps me grow as a developer.`}
            >
              <span
                className={
                  "ease-in-out duration-500 " +
                  (isHoveringTexts ? hoveringTextStyle : "")
                }
              >
                open source projects
              </span>
            </ReactPopover>
          </div>

          <div className="flex flex-row flex-wrap gap-1 text-secondary text-[11px] md:text-lg leading-normal md:leading-relaxed">
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
              after="and tackling with freelance projects. I like taking on unique
              challenges. Learning new development skills is a hobby of mine,
              and I'm keen on getting involved in immersive open-source
              projects."
            >
              <span
                className={
                  "ease-in-out duration-500 " +
                  (isHoveringTexts ? hoveringTextStyle : "")
                }
              >
                video games
              </span>
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
