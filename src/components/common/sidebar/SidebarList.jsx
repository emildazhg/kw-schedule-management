import React from "react";
import { Link } from "react-router-dom";

const SidebarList = ({ handleActiveClass, status, isActive, sidebar }) => {
  return (
    <div className="sidebar__nav">
      <ul>
        <Link
          className={`sidebar__item ${isActive(sidebar.name)}`}
          onClick={() => handleActiveClass(sidebar.name)}
          to={sidebar.link}
        >
          <div>
            <div className={`sidebar${status}__initial  `}>
              <i className={`fa fa-${sidebar.icon}`} />
            </div>
            <div className={`sidebar${status}__link-list`}>
              <i className={`fa fa-${sidebar.icon} u-padding-right-small`} />
              {sidebar.name}
            </div>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarList;
