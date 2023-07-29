import { videos } from "../../data/video";
import { useNavigate, useParams } from "react-router";

import "./VideoPlayer.css";
import { VideoCard } from "../../components/videoCard/VideoCard";
import { useContext } from "react";
import { WatchLaterContext } from "../../contexts/WatchLaterContext";

export const VideoPlayer = (props) => {
  const { dispatch, state } = useContext(WatchLaterContext);
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = videos.find(({ _id }) => _id === parseInt(videoId));

  console.log({ state });

  const clickHandler = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  const addToWatchLater = () => {
    console.log("clicked");
    dispatch({ payload: videoId, type: "ADD" });
  };
  return (
    <div className="player-wrapper">
      <div className="video-player-notes">
        <div className="video-player">
          <iframe
            width="100%"
            height="517"
            src={`${video.src}`}
            title="How to EARN ₹50,000 Per Month from HOME | Tanay Pratap Hindi"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <button className="btn-wl" onClick={addToWatchLater}>
            Watch Later
          </button>
        </div>
        <div className="video-notes"></div>
      </div>
      <div className="more">
        <ul>
          {videos
            .map(({ _id, thumbnail, src, category, views, title }) => {
              return (
                <VideoCard
                  _id={_id}
                  thumbnail={thumbnail}
                  src={src}
                  title={title}
                  category={category}
                  clickHandler={clickHandler}
                />
              );
            })
            .slice(0, 4)}
        </ul>
      </div>
    </div>
  );
};
