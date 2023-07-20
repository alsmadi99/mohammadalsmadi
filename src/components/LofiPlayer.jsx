import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { LofiPlayerContext } from "./LofiPlayerProvider";

const LofiPlayer = () => {
  const { isPlaying } = useContext(LofiPlayerContext);

  return (
    <div style={{ display: "none" }}>
      <ReactPlayer
        url={"lofi2.mp3"}
        playing={true}
        volume={0.1}
        loop
        muted={!isPlaying}
      />
    </div>
  );
};

export default LofiPlayer;
