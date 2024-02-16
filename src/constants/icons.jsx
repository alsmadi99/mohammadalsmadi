import React, { lazy } from "react";
import { AiFillLinkedin as _AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub as _AiFillGithub } from "react-icons/ai";
import { AiOutlineMail as _AiOutlineMail } from "react-icons/ai";
import { AiOutlineLink as _AiOutlineLink } from "react-icons/ai";
import { AiFillAndroid as _AiFillAndroid } from "react-icons/ai";
import { AiFillApple as _AiFillApple } from "react-icons/ai";

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
