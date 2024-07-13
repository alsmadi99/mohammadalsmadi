import { lazy } from "react";

const AiFillLinkedin = lazy(() =>
  import("react-icons/ai").then((module) => ({
    default: module.AiFillLinkedin,
  }))
);
const AiFillGithub = lazy(() =>
  import("react-icons/ai").then((module) => ({ default: module.AiFillGithub }))
);
const AiOutlineMail = lazy(() =>
  import("react-icons/ai").then((module) => ({ default: module.AiOutlineMail }))
);
const AiOutlineLink = lazy(() =>
  import("react-icons/ai").then((module) => ({ default: module.AiOutlineLink }))
);
const AiFillAndroid = lazy(() =>
  import("react-icons/ai").then((module) => ({ default: module.AiFillAndroid }))
);
const AiFillApple = lazy(() =>
  import("react-icons/ai").then((module) => ({ default: module.AiFillApple }))
);

export {
  AiFillLinkedin as AiFillLinkedinLazy,
  AiFillGithub as AiFillGithubLazy,
  AiOutlineMail as AiOutlineMailLazy,
  AiOutlineLink as AiOutlineLinkLazy,
  AiFillAndroid as AiFillAndroidLazy,
  AiFillApple as AiFillAppleLazy,
};
