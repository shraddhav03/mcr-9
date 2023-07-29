import App from "../../App";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Category } from "../../components/category/Category_page";
import "./Home.css";
import { categories } from "../../data/category";

export const Home = () => {
  const [catData, setCatData] = useState();
  const navigate = useNavigate();

  const categoryHandler = (catId) => {
    // const filtereCat = categories.filter((item)=>item.category)

    console.log("clicked");
    navigate(`/category/${catId}`);
  };
  return (
    <>
      <section className="listing">
        <div className="listing-heading">
          <h1>Categories</h1>
        </div>
        <div className="category-list">
          {categories.map(({ _id, thumbnail, src, category }) => {
            return (
              <div className="category-list">
                <li onClick={() => categoryHandler(category)} className="list">
                  <img src={thumbnail} alt="" />
                  <p>{category}</p>
                </li>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
