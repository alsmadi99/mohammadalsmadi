import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {
	AiOutlineLinkLazy,
	AiFillAppleLazy,
	AiFillAndroidLazy,
} from '../constants/icons';

import useIsMobile from '../hooks/useIsMobile';

const Card = ({ imagen, title, description, link, android, ios }) => {
	const [show, setShown] = useState(false);

	const props3 = useSpring({
		opacity: 1,
		transform: show ? 'scale(1.03)' : 'scale(1)',
		boxShadow: show
			? '0 20px 25px rgb(0 0 0 / 25%)'
			: '0 2px 10px rgb(0 0 0 / 8%)',
	});

	const isMobile = useIsMobile();
	return (
		<animated.div
			className="bg-darkBlue flex flex-col justify-between w-[10rem] md:w-[18rem] p-4 md:p-8 pt-0 h-[350px] md:h-[500px] shadow-lg rounded-md cursor-pointer"
			style={props3}
			onMouseEnter={() => setShown(true)}
			onMouseLeave={() => setShown(false)}
		>
			<div className="w-full">
				<img src={imagen} alt={title} className="rounded-xl md:-mt-16 -mt-5" />
				<div className="mt-2 md:mt-5 h-full">
					<h2
						className={`text-${title.length > 20 ? 'xs' : 'sm'} md:text-${
							title.length > 20 ? 'sm' : 'lg'
						} font-bold mt-2 w-full`}
					>
						{title}
					</h2>
					<p className="mt-2 text-[10px] md:text-sm w-full">{description}</p>
				</div>
			</div>
			<div className="w-full">
				<button
					onClick={() => {
						window.open(link, '_blank');
					}}
					className="md:mt-4 mt-1 w-full flex flex-row justify-between items-center bg-offWhite hover:bg-white text-darkBlue md:font-bold font-normal py-1 px-2 md:py-2 md:px-4 border-b-4 border-primary hover:white rounded text-[10px] md:text-lg"
				>
					View Website
					<AiOutlineLinkLazy />
				</button>
				{!!android && !!ios && (
					<div className="flex flex-row w-full justify-between mt-2">
						<button
							onClick={() => {
								window.open(ios, '_blank');
							}}
							className="w-[45%] flex text-[9px] md:text-xs flex-row justify-between items-center bg-offWhite hover:bg-white text-darkBlue py-1 px-1 md:py-2 md:px-2 border-b-4 border-primary hover:white rounded"
						>
							iOS
							<AiFillAppleLazy size={isMobile ? 10 : 17} />
						</button>
						<button
							onClick={() => {
								window.open(android, '_blank');
							}}
							className="w-[45%] flex text-[9px] md:text-xs flex-row justify-between items-center bg-offWhite hover:bg-white text-darkBlue py-1 px-1 md:py-2 md:px-2 border-b-4 border-primary hover:white rounded"
						>
							Android
							<AiFillAndroidLazy size={isMobile ? 10 : 17} />
						</button>
					</div>
				)}
			</div>
		</animated.div>
	);
};

export default Card;
