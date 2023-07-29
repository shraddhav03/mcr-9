import "./VideoCard.css";

export const VideoCard = ({
  _id,
  thumbnail,
  src,
  category,
  views,
  title,
  clickHandler,
}) => {
  return (
    <div className="category">
      <li className="list" onClick={() => clickHandler(_id)}>
        <img src={thumbnail} alt="" />
        <p>{title}</p>
        <p>{category}</p>
      </li>
    </div>
  );
};
