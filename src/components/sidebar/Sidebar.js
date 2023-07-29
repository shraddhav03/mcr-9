import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const SideBar = () => {
  return (
    <>
      <div className="feed-inner-div">
        <div className="sidebar">
          <div className="sidebar-inner-div">
            <h3>
              <NavLink className="feed-link" to="/">
                Home
              </NavLink>
            </h3>
          </div>

          <div className="sidebar-inner-div">
            <h3>
              <NavLink className="feed-link" to="/explore">
                Explore
              </NavLink>
            </h3>{" "}
          </div>

          <div className="sidebar-inner-div">
            <h3>
              <NavLink className="feed-link" to="/bookmark">
                Playlist
              </NavLink>
            </h3>
          </div>

          <div className="sidebar-inner-div">
            <h3>
              <NavLink className="feed-link" to="/watchlater">
                Watch Later
              </NavLink>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
