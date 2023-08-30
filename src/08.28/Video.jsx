import React from "react";
import PropTypes from "prop-types";

const Video = ({ videoID, width = 0 }) => (
  <div className="video-responsive">
    <iframe
      width={width}
      height="480"
      src={`https://www.youtube.com/embed/${videoID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Video.propTypes = {
    videoID: PropTypes.string.isRequired
};

export default Video;

