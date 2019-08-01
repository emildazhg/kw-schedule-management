import React, { Component } from "react";
import { Field, reduxForm, formValueSelector, reset } from "redux-form";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Input from "components/Input";
import Select from "components/Select";
import EventList from "components/EventList";
import { getEventCategories } from "redux/action/categoriesAction";
import { getEventLists, addEvents } from "redux/action/eventsAction";
import { required } from "utils/form-validation";
import ModalContent from "components/ModalContent";
import Datepicker from "components/Datepicker";

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
    return this.props.categories.filter(
      category => category.category === value
    );
  };

  onSubmit = e => {
    const { myValues, addEvents, toggleModal, reset, ModalStatus } = this.props;
    const result = this.renderFilter(myValues.category);
    result && this.props.valid
      ? addEvents(myValues, result[0] || { classNames: "urgent__important" }, {
          startDate: ModalStatus.dateStr || null
        }).then(toggleModal(), reset("addEventForm"))
      : e.preventDefault();
  };

  render() {
    const {
      events,
      ModalStatus,
      toggleModal,
      handleSubmit,
      categories,
      toggleModalDate
    } = this.props;

    const modalContent = {
      header: "Add New Event",
      body: (
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
          {!ModalStatus.date && (
            <Field
              classInput="form-control"
              name="start"
              label="Date"
              date={ModalStatus}
              component={Datepicker}
              type="date"
              id="eventDate"
              validate={[required]}
            />
          )}
          <Field
            classInput="form-control"
            name="category"
            label="Categories"
            component={Select}
            placeholder="Drinking coffee..."
            id="category"
            options={categories}
          />
        </form>
      )
    };

    const additionalButton = (
      <div className="button button-add" onClick={this.onSubmit}>
        Confirm
      </div>
    );

    return (
      <div className="schedule__main">
        <div className="schedule__main__event" id="external-events">
          <div className="border" />
          <div className="button button-add" onClick={toggleModal}>
            <i className="fa fa-plus" />
            Add New Event
          </div>
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
            eventClick={this.handleClick}
            dateClick={toggleModalDate}
          />
        </div>
        {ModalStatus && (
          <ModalContent
            onClose={toggleModal}
            content={modalContent}
            additionalButton={additionalButton}
          />
        )}
      </div>
    );
  }
}

const selector = formValueSelector("addEventForm");

const mapStateToProps = state => {
  return {
    events: state.events,
    categories: state.categories,
    myValues: selector(state, "title", "category", "start"),
    ModalStatus: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEvents: (form, data, date) => dispatch(addEvents(form, data, date)),
    getEventLists: () => dispatch(getEventLists()),
    getEventCategories: () => dispatch(getEventCategories()),
    toggleModal: () => dispatch({ type: "TOGGLE_MODAL" }),
    toggleModalDate: arg => dispatch({ type: "TOGGLE_MODAL_DATE", arg }),
    reset: formName => dispatch(reset(formName))
  };
};

Schedule = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);

export default reduxForm({ form: "addEventForm" })(Schedule);
