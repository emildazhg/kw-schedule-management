import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Modal from "components/Modal";
import Input from "components/Input";
import Select from "components/Select";
import EventList from "components/EventList";
import { getEventCategories } from "redux/action/categoriesAction";
import { getEventLists, addEvents } from "redux/action/eventsAction";
import { required } from "utils/form-validation";

class Schedule extends Component {
  componentDidMount() {
    this.props.getEventLists();
    this.props.getEventCategories();

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

  renderFilter = value => {
    return this.props.categories.filter(category =>
      category.category === value ? category.classNames : ""
    );
  };

  onSubmit = e => {
    const result = this.renderFilter(this.props.myValues.category);
    result[0]
      ? this.props.addEvents(this.props.myValues, result[0])
      : e.preventDefault();
  };

  render() {
    const modalProps = (
      <div className="button button-add">
        <i className="fa fa-plus" />
        Add New Event
      </div>
    );

    const modalContent = {
      header: "Add New Event",
      body: (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            classInput="form-control"
            name="title"
            label="Event's title"
            component={Input}
            type="text"
            placeholder="Drinking coffee..."
            id="eventTitle"
            validate={[required]}
          />
          <Field
            classInput="form-control"
            name="category"
            label="Categories"
            component={Select}
            placeholder="Drinking coffee..."
            id="category"
            options={this.props.categories}
          />
        </form>
      )
    };

    const additionalButton = (
      <div className="button button-add" type="submit" onClick={this.onSubmit}>
        Confirm
      </div>
    );

    const { events } = this.props;
    return (
      <div className="schedule__main">
        <div className="schedule__main__event" id="external-events">
          <Modal
            modalProps={modalProps}
            modalContent={modalContent}
            additionalButton={additionalButton}
          />
          <div className="border" />
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
            rerenderDelay={10}
            editable={true}
            selectable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            eventClick={this.handleEventClick}
            dateClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

const selector = formValueSelector("addEventForm");

const mapStateToProps = state => {
  return {
    events: state.events,
    categories: state.categories,
    myValues: selector(state, "title", "category")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEvents: (form, data) => dispatch(addEvents(form, data)),
    getEventLists: () => dispatch(getEventLists()),
    getEventCategories: () => dispatch(getEventCategories())
  };
};

Schedule = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);

export default reduxForm({ form: "addEventForm" })(Schedule);
