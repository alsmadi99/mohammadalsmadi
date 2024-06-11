/*
  ! This component is the About me section of the portfolio.
*/

import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../hoc';
import ReactPopover from './ReactPopover';
import { experience, games } from '../constants';
import { useParallax } from 'react-scroll-parallax';
import { FaCodePullRequest } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

import { GITHUB_API_URL, getYearsOfExperience } from '../global/utils';

const fetchContributions = () =>
	fetch(GITHUB_API_URL, {
		headers: {
			'User-Agent': 'smadixd',
			accept: 'application/json',
		},
	}).then((response) => response.json());

const About = () => {
	const [isHoveringTexts, setIsHoveringTexts] = useState(false);
	const [latestContributions, setLatestContributions] = useState({});

	const getLatestContribution = async () => {
		const contributionsData = await fetchContributions();
		const filteredContributions = contributionsData.items.filter(
			(item) => !item.repository_url.includes('smadixd')
		);
		const contributionsHashMap = filteredContributions.reduce((acc, item) => {
			const repo = item.repository_url.split('repos/').pop().toLowerCase();
			const link = item.html_url.split('/pull')[0];

			if (!acc[repo]) {
				acc[repo] = {
					name: repo?.split('/')[1],
					link: link,
					items: [],
				};
			}

			if (
				acc[repo].items.length < 3 &&
				((!item.closed_at && !item.pull_request.merged_at) ||
					(!!item.closed_at && !!item.pull_request.merged_at))
			) {
				acc[repo].items.push({
					name: item.title,
					link: item.pull_request.html_url,
					isMerged: !!item.pull_request.merged_at,
				});
			}

			return acc;
		}, {});

		setLatestContributions(contributionsHashMap);
	};

	useEffect(() => {
		getLatestContribution();
	}, []);

	const hoveringTextStyle =
		'text-primary cursor-pointer bg-secondary rounded-sm px-[5px] border-b-[4px] border-white';

	const hoverableTextStyles =
		'ease-in-out duration-500 ' +
		(isHoveringTexts ? hoveringTextStyle : 'border-b-2 border-white');

	const parallax = useParallax({
		scale: [1, 1.5, 'easeInQuad'],
	});

	return (
		<div
			className="min-h-[85vh] flex flex-col mt-10 justify-between"
			onMouseOver={() => setIsHoveringTexts(true)}
			onMouseOut={() => setIsHoveringTexts(false)}
		>
			<div>
				<div className="w-[100%] self-center justify-center flex-wrap text-wrap flex">
					<p
						ref={parallax.ref}
						className={`text-white text-center md:text-6xl text-xl font-black text-wrap self-center w-[70%]`}
					>
						Hi, my name is <span className="text-secondary"> Mohammad</span>
					</p>

					<p
						className={`mt-10 text-white-100 md:text-3xl text-lg text-center leading-7 w-[100%]`}
					>
						I love building unique web & mobile applications.
					</p>
				</div>

				<div className="flex flex-col justify-between w-full gap-4 mt-10 font-semibold md:font-normal">
					<div className="flex flex-row flex-wrap w-full gap-3 md:gap-10">
						<div className="mt-4 text-secondary text-[12px] md:text-2xl leading-6 md:leading-[3rem]">
							<ReactPopover
								trigger="hover"
								content={
									<div className="flex flex-col w-full md:text-xl text-md">
										{experience.map((exp, index) => (
											<p className="text-white" key={index}>
												~ {getYearsOfExperience(exp.start, exp.end)}
												{' @ '}
												<a
													href={exp.link}
													target="_blank"
													rel="noopener noreferrer"
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

						<div className="flex flex-row flex-wrap gap-1 text-secondary text-[12px] md:text-2xl leading-6 md:leading-[3rem]">
							<ReactPopover
								trigger="hover"
								content={
									<div className="flex flex-col w-full">
										<span className="text-white text-md font-bold mb-4">
											Here are my most recent contributions.
										</span>
										<div className="max-h-[30vh] px-4 py-4 border-secondary border-2 rounded-md overflow-y-auto">
											{Object.keys(latestContributions).map(
												(repoKey, index) => (
													<div key={index} className={index > 0 ? ' mt-2' : ''}>
														<div className="flex flex-row items-center gap-1">
															<span className="font-semibold text-xl">{`${latestContributions[repoKey].name}: `}</span>
															<a
																href={latestContributions[repoKey].link}
																className="text-secondary underline"
																rel="noopener noreferrer"
																target="_blank"
															>
																<FiExternalLink className="ml-1 text-xl" />
															</a>
														</div>
														{latestContributions[repoKey].items?.map(
															(item, index) => (
																<div
																	key={`${repoKey}-${index}`}
																	className="flex flex-row items-center cursor-pointer leading-7 hover:text-secondary"
																	onClick={() =>
																		window.open(item.link, '_blank')
																	}
																>
																	<FaCodePullRequest
																		className={`${
																			item.isMerged
																				? 'text-github-purple'
																				: 'text-github-green'
																		} text-lg md:text-xl w-[10%]`}
																	/>
																	<span className="text-sm md:text-lg py-1 w-[90%]">
																		{item?.name}
																	</span>
																</div>
															)
														)}
													</div>
												)
											)}
										</div>
									</div>
								}
								before={`Team collaboration is something I truly enjoy, and I've had the
              privilege of working alongside incredibly talented individuals who
              have enriched my knowledge over the years. As solo working on
              projects isn't something that motivates me. I believe that contributing to `}
								after={`not only helps the community, but also helps me grow as a developer and learn how communities around the world are building software.`}
							>
								<span className={hoverableTextStyles}>
									open-source projects
								</span>
							</ReactPopover>
						</div>

						<div className="flex flex-row flex-wrap gap-1 text-secondary text-[12px] md:text-2xl leading-6 md:leading-[3rem]">
							<ReactPopover
								trigger="hover"
								content={
									<div className="md:text-xl text-md">
										{games.map((game) => (
											<p className="text-white" key={game}>
												{'• ' + game}
											</p>
										))}
										<small>{'and more :)'}</small>
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

			<div className="w-full flex items-center justify-center text-center mt-5">
				<p className="text-white text-center text-sm md:text-2xl leading-6 md:leading-10 italic w-fit">
					{`Check out my portfolio to see some cool projects I've worked on. Got questions or just want to chat? Reach out anytime!`}
				</p>
			</div>
		</div>
	);
};

export default SectionWrapper(About, 'about');
