import React from "react";
import "../../css/Scoreboard.css";

const Scoreboard = ({ xScore, oScore, xPlaying }) => {
  return (
    <div className="scoreboard">
      <span className={`x-score ${xPlaying === true ? "xScoreboard" : ""}`}>
        X - {xScore}
      </span>
      <span className={`o-score ${xPlaying === false ? "oScoreboard" : ""}`}>
        O - {oScore}
      </span>      
    </div>
  );
};

export default Scoreboard;