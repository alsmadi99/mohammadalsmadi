import { useEffect, useRef } from 'react';
import { useGlobalContext } from './GlobalContext';

const StarWrapper = (Component, idName) =>
	function HOC(props) {
		const sectionRef = useRef(null);
		const { setCurrentHash } = useGlobalContext();

		useEffect(() => {
			const sectionRefVar = sectionRef.current;
			const handleIntersection = (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
						setCurrentHash(idName);
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersection, {
				threshold: 0.5, // Trigger when 50% of the section is in view
				rootMargin: '0px', // No margins
			});

			if (sectionRef.current) {
				observer.observe(sectionRef.current);
			}

			// Clean up
			return () => {
				if (sectionRefVar) {
					observer.unobserve(sectionRefVar);
				}
			};
		}, [setCurrentHash]);

		return (
			<section
				ref={sectionRef}
				className={`h-auto md:w-2/3 w-[100%] pb-4 mx-auto px-2 md:px-0 flex flex-col justify-center items-center`}
			>
				<span id={idName} className="select-none mb-16">
					&nbsp;
				</span>

				<Component {...props} />
			</section>
		);
	};

export default StarWrapper;
