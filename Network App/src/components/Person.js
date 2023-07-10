import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here

  render() {
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={() => this.props.handleDelete(this.props.index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
