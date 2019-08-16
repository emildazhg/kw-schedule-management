import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { getEventLists } from "redux/action/eventsAction";
import EventList from "components/pages/schedule/EventList";
import EventForm from "components/pages/schedule/EventForm";

class Schedule extends Component {
  componentDidMount() {
    this.props.getEventLists();

    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".event-list",
      eventData: eventEl => {
        let title = eventEl.getAttribute("title");
        let className = eventEl.getAttribute("class");
        return {
          title: title,
          className: className
        };
      }
    });
  }

  handleEventClick = arg => {
    this.props.history.push("/schedule/add", { state: arg });
  };
  render() {
    const { events } = this.props;
    return (
      <div className="schedule__main">
        <div className="schedule__main__event" id="external-events">
          <div className="border" />
          <Link className="button button-add" to="/schedule/add">
            <i className="fa fa-plus" />
            Add New Event
          </Link>
          *drag and drop the event to the calender
          {events.map(event => (
            <EventList key={event.id} event={event} />
          ))}
        </div>
        <div className="schedule__main__calender" id="">
          <FullCalendar
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            editable={true}
            selectable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            eventClick={this.handleEventClick}
            dateClick={this.handleEventClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventLists: () => dispatch(getEventLists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
