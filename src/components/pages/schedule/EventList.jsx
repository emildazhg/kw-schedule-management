import React from "react";

const EventList = ({ event: { classNames, title } }) => {
  return (
    <div className={`schedule__main__event__item ${classNames}`}>
      <div className={`event-list ${classNames}`} title={title} id="event">
        {title}
      </div>
    </div>
  );
};

export default EventList;
