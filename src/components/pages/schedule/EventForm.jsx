import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import {
  addEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from "redux/action/eventsAction";
import { getEventCategories } from "redux/action/categoriesAction";
import { required } from "utils/form-validation";
import Input from "components/common/form/Input";
import Select from "components/common/form/Select";
import Datepicker from "components/common/form/Datepicker";

class EventForm extends Component {
  componentDidMount() {
    this.props.getEventCategories();
    if (this.props.match.params.id) {
      this.props
        .getEventById(this.props.match.params.id)
        .then(() => this.props.initialize(this.props.event));
    }
  }

  renderFilter = value => {
    return this.props.categories.filter(
      category => category.category === value
    );
  };

  renderClassType = data => {
    if (data[0]) {
      return { category: data[0].category, classNames: data[0].classNames };
    }
    return {
      category: "Urgent and Important",
      classNames: "urgent__important"
    };
  };

  handleDelete = () => {
    this.props.deleteEvent(this.props.match.params.id);
  };

  onSubmit = formValues => {
    const { addEvents, reset, match, updateEvent } = this.props;
    const result = this.renderFilter(formValues.category);
    const { category, classNames } = this.renderClassType(result);
    const formFinal = { ...formValues, category, classNames };
    match.path === "/schedule/add"
      ? addEvents(formFinal).then(reset("addEventForm"))
      : updateEvent(match.params.id, formFinal).then(reset("addEventForm"));
  };
  render() {
    const { handleSubmit, categories } = this.props;

    return (
      <div className="form">
        <div className="form__header">
          <div>Add Event</div>
          <button className="button button-danger" onClick={this.handleDelete}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            className="form-control"
            name="title"
            label="Event's title"
            component={Input}
            type="text"
            id="eventTitle"
            validate={[required]}
          />
          <div className="form-row">
            <div className="form-group col-md-6">
              <Field
                className="form-control"
                name="start"
                label="Start Date"
                component={Datepicker}
                type="date"
                id="startDate"
                validate={[required]}
              />
            </div>
            <div className="form-group col-md-6">
              <Field
                className="form-control"
                name="end"
                label="End Date"
                component={Datepicker}
                type="date"
                id="endDate"
                validate={[required]}
              />
            </div>
          </div>
          <Field
            className="form-control"
            name="category"
            label="Categories"
            component={Select}
            placeholder="Drinking coffee..."
            id="category"
            options={categories}
          />
          <div className="form__footer">
            <button className="button button-cancel">
              <Link to="/schedule">Cancel</Link>
            </button>
            <button className="button button-add" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.events.event,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEvents: form => dispatch(addEvents(form)),
    reset: formName => dispatch(reset(formName)),
    getEventCategories: () => dispatch(getEventCategories()),
    getEventById: id => dispatch(getEventById(id)),
    deleteEvent: id => dispatch(deleteEvent(id)),
    updateEvent: (id, form) => dispatch(updateEvent(id, form))
  };
};

EventForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);

export default reduxForm({
  form: "addEventForm"
})(EventForm);
