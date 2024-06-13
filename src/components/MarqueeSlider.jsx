import React, { useEffect, useRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

const MarqueeSlider = ({ data }) => {
	const sliderRef = useRef(null);

	const frog = useParallax({ rotateY: [0, 360] });

	useEffect(() => {
		const slider = sliderRef.current;
		if (slider) {
			slider.addEventListener('mouseover', () => {
				slider.style.animationPlayState = 'paused';
			});
			slider.addEventListener('mouseout', () => {
				slider.style.animationPlayState = 'running';
			});
		}
	}, []);

	return (
		<div className="w-full">
			<div ref={sliderRef} className="flex animate-marquee h-[180px]">
				{data.map((cert, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-2 justify-start p-4 min-w-[150px] sm:min-w-[200px] md:min-w-[250px] mr-10 opacity-100 md:opacity-70 transition-all duration-500 ease-in-out cursor-pointer select-none outline-none hover:opacity-100 transform-gpu hover:scale-110"
						onClick={() => {
							if (!cert.link) {
								return;
							}
							window.open(cert.link, '_blank');
						}}
					>
						<div className="w-full min-h-[90%] justify-center items-center flex bg-white rounded-lg">
							<img
								ref={frog.ref}
								src={cert.image}
								alt={'cert name' + cert.name}
								className="max-w-[90%] max-h-[90%] shadow-3xl"
							/>
						</div>
						<div className="text-center text-sm md:text-base">
							<p>{cert.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MarqueeSlider;
