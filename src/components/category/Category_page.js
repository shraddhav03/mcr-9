import App from "../../App";
import "./Category.css";

import { categories } from "../../data/category";
import { videos } from "../../data/video";

import { useNavigate, useParams } from "react-router";
import { VideoCard } from "../videoCard/VideoCard";

export const Category = ({ _id, thumbnail, src, category, views, title }) => {
  const navigate = useNavigate();
  const { catId } = useParams();

  console.log(catId);
  const clickHandler = (videoId) => {
    console.log({ videoId });
    navigate(`/video/${videoId}`);
  };
  const filterCategory = videos.filter(({ category }) => category === catId);
  // console.log(filterCategory.length);
  return (
    <>
      <div className="category-wrapper">
        {filterCategory.map(
          ({ _id, thumbnail, src, category, views, title }) => {
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
          }
        )}
      </div>
    </>
  );
};
