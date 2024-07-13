const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  section: "w-full h-full sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-light lg:text-[30px] sm:text-[16px] xs:text-[10px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "pb-2 px-4 md:px-0 text-white font-black md:text-[30px] sm:text-[20px] xs:text-[15px] text-[15px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-primary uppercase tracking-wider font-semibold",
};

const hoverableTextStyle = "border-b-[4px] px-[5px] border-offWhite";

export const hoveringTextStyle = `font-semibold text-offWhite cursor-pointer bg-darkBlue rounded-sm ${hoverableTextStyle}`;

export const hoverableTextStyles = ({
  isHoveringTexts,
  isMobile,
}: {
  isHoveringTexts: boolean;
  isMobile: boolean;
}) =>
  "ease-in-out duration-300 " +
  (isHoveringTexts || isMobile ? hoveringTextStyle : hoverableTextStyle);

export const starForkContainer =
  "flex flex-row items-center justify-between px-1 py-1 md:py-0 border-primary border-2 rounded-lg w-[45%]";

export { styles };
