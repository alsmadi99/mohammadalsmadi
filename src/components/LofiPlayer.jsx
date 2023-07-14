import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { LofiPlayerContext } from "./LofiPlayerProvider";

const LofiPlayer = () => {
  const { isPlaying } = useContext(LofiPlayerContext);

  console.log({ isPlaying });
  return (
    <ReactPlayer
      url={`lofi.mp3`}
      playing={true}
      volume={0.1}
      loop
      muted={!isPlaying}
    />
  );
};

export default LofiPlayer;
