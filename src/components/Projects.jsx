import React, { Suspense, lazy } from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { certificates, projects } from '../constants';
import MarqueeSlider from './MarqueeSlider';
import useIsMobile from '../hooks/useIsMobile';

const LazyCarouselComponent = lazy(() => import('./Carousel'));

const Projects = () => {
	const isMobile = useIsMobile();
	return (
		<div className="flex flex-col min-h-[85vh]">
			<div className="w-3/4 m-auto">
				<div>
					<h1 className={styles.sectionHeadText}>Projects I worked on.</h1>
				</div>
				<Suspense fallback={<div>Loading Projects Carousel...</div>}>
					<LazyCarouselComponent
						cards={projects}
						className="h-[70vh]"
						offset={isMobile ? 2 : 4}
						showArrows={false}
					/>
				</Suspense>
			</div>

			<div className="pb-10">
				<div className="w-3/4 m-auto">
					<h1 className={styles.sectionHeadText}>Certifications.</h1>
				</div>
				<div className="w-[100vw]">
					<MarqueeSlider data={certificates.concat(certificates)} />
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(Projects, 'projects');
